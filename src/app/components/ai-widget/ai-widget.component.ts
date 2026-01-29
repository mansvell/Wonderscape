import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiChatService } from '../../services/ai-chat.service';

@Component({
  selector: 'app-ai-widget',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './ai-widget.component.html',
})
export class AiWidgetComponent {
  open = false;
  input = '';
  loading = false;
  error = '';

  constructor(public ai: AiChatService) {}

  toggle() { this.open = !this.open; this.error = ''; }
  close() { this.open = false; }

  async send() {
    const text = this.input.trim();
    if (!text || this.loading) return;
    this.input = '';
    this.loading = true;
    this.error = '';

    try {
      await this.ai.send(text);
      // (optionnel) auto-scroll via querySelector si tu veux
    } catch (e: any) {
      this.error = e?.message ?? 'Erreur';
    } finally {
      this.loading = false;
    }
  }
}
