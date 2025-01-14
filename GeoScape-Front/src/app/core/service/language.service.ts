import {Inject, Injectable} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private supportedLanguages = ['en', 'ar'];

  constructor(private translate: TranslateService,
              @Inject(DOCUMENT) private document: Document) {
    this.translate.addLangs(this.supportedLanguages);
    this.translate.setDefaultLang('en');

  }
  switchLanguage(lang: string): void {
    debugger
    if (!this.supportedLanguages.includes(lang)) return;

    this.translate.use(lang);
    this.updateDirection(lang);
  }

  private updateDirection(lang: string): void {
    const isRTL = lang === 'ar';
    this.document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    this.document.documentElement.lang = lang;
  }
}
