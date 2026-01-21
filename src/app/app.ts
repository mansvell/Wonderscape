import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Lang, LanguageService} from './services/language.services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Wonderscape');
  constructor(public lang: LanguageService) {}

  setLang(l: Lang) {
    this.lang.setLang(l);
  }
}
