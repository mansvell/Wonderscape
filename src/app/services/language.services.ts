import { Injectable } from '@angular/core';

export type Lang = 'de' | 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly KEY = 'wonderscape_lang';
  private _lang: Lang = 'de';

  constructor() {
    const saved = (localStorage.getItem(this.KEY) as Lang | null);
    if (saved === 'de' || saved === 'fr' || saved === 'en') this._lang = saved;
  }

  get lang(): Lang {
    return this._lang;
  }

  setLang(lang: Lang) {
    this._lang = lang;
    localStorage.setItem(this.KEY, lang);
  }

  t(map: Record<Lang, string>): string {
    return map[this._lang];
  }
}
