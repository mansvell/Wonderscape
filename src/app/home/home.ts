import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {LanguageService} from '../services/language.services';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class HomeClass {
  constructor(public lang: LanguageService) {}
}
