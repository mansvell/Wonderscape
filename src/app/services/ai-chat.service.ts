import { Injectable } from '@angular/core';

export type ChatMsg = { role: 'user' | 'assistant'; content: string };

@Injectable({ providedIn: 'root' })
export class AiChatService {
  history: ChatMsg[] = [];

  async send(message: string): Promise<string> {
    const payload = {
      message,
      history: this.history
    };

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data?.error || data?.details || 'Request failed');

    const reply = String(data.reply ?? '');

    // garde un petit historique
    this.history.push({ role: 'user', content: message });
    this.history.push({ role: 'assistant', content: reply });
    this.history = this.history.slice(-12);

    return reply;
  }

  reset(): void {
    this.history = [];
  }
}

