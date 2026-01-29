import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

export const config = { runtime: "nodejs" };

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

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
      const who = m.role === "assistant" ? "ASSISTANT" : "USER";
      lines.push(`${who}: ${m.content}`);
    }
    lines.push("");
  }

  lines.push(`USER: ${message}`);
  lines.push("ASSISTANT:");
  return lines.join("\n");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const body = (req.body ?? {}) as any;

    const message = safeString(body.message, 1200);
    if (!message) return res.status(400).json({ error: "Missing message" });

    // ✅ On valide/normalise history pour éviter role: string
    const historyRaw = Array.isArray(body.history) ? body.history : [];
    const history: Msg[] = historyRaw
      .filter((m: any) => m && (m.role === "user" || m.role === "assistant"))
      .map((m: any) => ({
        role: m.role as Role,
        content: safeString(m.content, 800)
      }))
      .slice(-12); // perf

    const system = `
You are Wonderscape Guide.
Goal: educate users about monuments, places, landscapes and cultural sites worldwide.
Even if a place is not on the website, you must answer.

Style:
- concise
- structured with short bullet points
- include: where it is, why it is famous, best time to visit, 1–2 practical tips
- avoid emojis
`.trim();

    // ✅ Transcript string => types stables sur toutes versions
    const input = buildTranscript(system, history, message);

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input,                 // <-- STRING (robuste)
      temperature: 0.7,
      max_output_tokens: 400 // perf/cout
    });

    const reply = response.output_text ?? "Sorry, I could not generate a response.";
    return res.status(200).json({ reply });
  } catch (e: any) {
    console.error("AI error:", e);
    return res.status(500).json({ error: "AI server error", details: e?.message ?? String(e) });
  }
}

