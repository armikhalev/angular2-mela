import { Component, OnInit } from '@angular/core';
import { AppKoylaService } from '../services/app-koyla.service'

@Component({
  selector: 'app-app-koyla',
  templateUrl: './app-koyla.component.html',
  styleUrls: ['./app-koyla.component.scss']
})

export class AppKoylaComponent implements OnInit {

  private word;
  private errorMessage;
  private langTranslateFrom;
  private langTranslateTo;

  constructor(private koylaService: AppKoylaService) { }

  ngOnInit() {
    this.word = 'Translate';
    this.langTranslateFrom = 'english';
    this.langTranslateTo = 'mela'
  }

  changeLanguage_onClick() {
      this.langTranslateFrom = this.langTranslateFrom === "english" ? "mela" : "english";
      this.langTranslateTo = this.langTranslateFrom === "english" ? "mela" : "english";
  }
  
  getWord(lang:string, toTranslate:string) {
    this.koylaService.getWord(lang, toTranslate)
                     .subscribe(
                       translation => this.word = translation,
                       error =>  this.errorMessage = <any>error);
  }

}
