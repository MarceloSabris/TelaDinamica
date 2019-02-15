import { Component, OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { DadosComplementaresService } from './DadosComplementares.service';
import { FormGroup }                 from '@angular/forms';
import { NgModule }                     from '@angular/core';

@Component({
  selector: 'VidaProtegida',
         templateUrl: 'VidaProtegida.component.html'
      ,
      providers:  [DadosComplementaresService]
  } 
    )
 export class VidaProtegidaComponent   implements OnInit {

  DadosComplementaress: any[];
  ngOnInit(): void {
    console.info('teste *********************************** man');
  }
    

    constructor(service: DadosComplementaresService) {
      //console.log('constructor running');
      //this.questions = service.getQuestions();
      service.getDadosComplementaress(11).then(questions => this.DadosComplementaress = questions);
      console.log('fudeu carregou os dois ');

     }
 }