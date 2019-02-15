import { Component }       from '@angular/core';
import { DadosComplementaresService } from './DadosComplementares.service';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>

  <div class="content-wrapper">
  
  <router-outlet></router-outlet>

  <app-footer></app-footer>

   <link rel="stylesheet" [href]='sanitizer.bypassSecurityTrustResourceUrl(cssUrl)'>
  `,
  providers:  [DadosComplementaresService]
})
export class AppComponent {
  DadosComplementaress: any[];
  cssUrl: string;
  constructor(service: DadosComplementaresService,public sanitizer: DomSanitizer) {
    //console.log('constructor running');
    //this.questions = service.getQuestions();
  //  service.getDadosComplementaress().then(questions => this.DadosComplementaress = questions);
    console.log(this.DadosComplementaress);
  }

  ngOnInit() {
    this.cssUrl = environment.CSSPath;
  }
  
}






