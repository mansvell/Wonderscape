import type { VercelRequest, VercelResponse } from "@vercel/node";

export const config = { runtime: "nodejs" };

type Role = "user" | "assistant";
type Msg = { role: Role; content: string };

function safeString(x: unknown, max = 2000): string {
  const s = String(x ?? "").trim();
  return s.length > max ? s.slice(0, max) : s;
}

function buildTranscript(system: string, history: Msg[], message: string): string {
  const lines: string[] = [];
  lines.push(`SYSTEM:\n${system}\n`);
  if (history.length) {
    lines.push("CONVERSATION SO FAR:");
    for (const m of history) {
      lines.push(`${m.role === "assistant" ? "ASSISTANT" : "USER"}: ${m.content}`);
    }
    lines.push("");
  }
  lines.push(`USER: ${message}`);
  lines.push("ASSISTANT:");
  return lines.join("\n");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // endpoint debug (ouvre /api/chat dans le navigateur)
  if (req.method === "GET") {
    return res.status(200).json({
      ok: true,
      runtime: "nodejs",
      hasKey: Boolean(process.env["OPENAI_API_KEY"]),
    });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const apiKey = process.env["OPENAI_API_KEY"];
    if (!apiKey) {
      return res.status(500).json({
        error: "Missing OPENAI_API_KEY",
        details: "Vercel -> Project Settings -> Environment Variables -> add OPENAI_API_KEY, then Redeploy",
      });
    }

    const body = (req.body ?? {}) as any;
    const message = safeString(body.message, 1200);
    if (!message) return res.status(400).json({ error: "Missing message" });

    const historyRaw = Array.isArray(body.history) ? body.history : [];
    const history: Msg[] = historyRaw
      .filter((m: any) => m && (m.role === "user" || m.role === "assistant"))
      .map((m: any) => ({ role: m.role as Role, content: safeString(m.content, 800) }))
      .slice(-12);

    const system = `
You are Wonderscape Guide.
Help users discover monuments, places, landscapes and cultural sites worldwide.
Even if a place is not on the website, you must answer.

Style:
- concise
- structured with short bullet points
- include: where it is, why it is famous, best time to visit, 1–2 practical tips
- avoid emojis
`.trim();

    const input = buildTranscript(system, history, message);

    // import dynamique => évite crash au chargement du module
    const mod: any = await import("openai");
    const OpenAI = mod.default ?? mod;
    const client = new OpenAI({ apiKey });

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input,
      temperature: 0.7,
      max_output_tokens: 400,
    });

    return res.status(200).json({
      reply: response.output_text ?? "Sorry, I could not generate a response.",
    });
  } catch (e: any) {
    console.error("API crash:", e);
    return res.status(500).json({
      error: "AI server error",
      details: e?.message ?? String(e),
    });
  }
}

