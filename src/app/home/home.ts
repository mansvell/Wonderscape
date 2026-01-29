import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {LanguageService} from '../services/language.services';
import { AiWidgetComponent } from '../components/ai-widget/ai-widget.component';

@Component({
  selector: 'app-home',
  imports: [
    AiWidgetComponent,
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class HomeClass {
  constructor(public lang: LanguageService) {}
}
