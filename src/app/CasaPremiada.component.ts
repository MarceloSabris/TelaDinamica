import { Component, OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { DadosComplementaresService } from './DadosComplementares.service';
import { FormGroup }                 from '@angular/forms';
import { NgModule }                     from '@angular/core';

@Component({
  selector: 'CasaPremiada',
         templateUrl: 'CasaPremiada.component.html'
      ,
      providers:  [DadosComplementaresService]
  } 
    )
 export class CasaPremiadaComponente   implements OnInit {

  DadosComplementaress: any[];
  ngOnInit(): void {
    console.info('teste *********************************** man');
  }
    

    constructor(service: DadosComplementaresService) {
      //console.log('constructor running');
      //this.questions = service.getQuestions();
      service.getDadosComplementaress(11).then(questions => this.DadosComplementaress = questions);
      console.log(this.DadosComplementaress);

     }
 }