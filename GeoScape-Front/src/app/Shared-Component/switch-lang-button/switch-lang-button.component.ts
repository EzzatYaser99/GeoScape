import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {LanguageService} from "../../core/service/language.service";

@Component({
  selector: 'app-switch-lang-button',
  standalone: true,
  imports: [TranslateModule, UpperCasePipe],
  templateUrl: './switch-lang-button.component.html',
  styleUrl: './switch-lang-button.component.scss',
})
export class SwitchLangButtonComponent {
  constructor(
    private readonly _languageService: LanguageService,
  ) {}

  currentLang: 'en' | 'ar' ='en';
  theme: 'dark' | 'light' = 'dark';

  get togglerText() {
    return this.currentLang === 'en' ? 'ar' : 'en';
  }

  toggleLang() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this._languageService.switchLanguage(this.currentLang);

  }
}
