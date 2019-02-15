import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { DadosComplementaresBase }     from './DadosComplementares-base';
import { DropdownDadosComplementares } from './DadosComplementares-dropdown';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { RestService } from './Rest/rest.service';
import { ServicoDadoComplementar } from './ServicoDadoComplementar';
import { TextboxDadosComplementares }  from './DadosComplementares-textbox';
import { debug } from 'util';
import { map } from 'rxjs/operators';

@Injectable()
export class DadosComplementaresService {
  constructor(private rest: RestService  ,private http: HttpClient ,     ) {
    
  }
  

  endpoint = 'https://localhost:44348/servicodadocomplementar';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
    


  // Faking server delay to test how to get this working with my API
  // I don't understand why this isn't working
  getDadosComplementaress(IdServico:number  ): Promise<DadosComplementaresBase<any>[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
   resolve(

    this.http.get(this.endpoint +'?IdSku='+  IdServico) .toPromise().then (  data => {
       console.info( data['ServicoDadoComplementar']);  
       let dadosComplemntares: DadosComplementaresBase<any>[] = [ ]; 
     
       if (data['ServicoDadoComplementar']) {
        console.info( ' ----------------  SKU cadastrado---------------');    
           if (data['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'])
            { 
              for (let keyProperty in data['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar']) {        
                if ( data['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["tipo"] == 'Text' )
                {
                  console.info( 'SKU - entrou  dadosComplemntares '); 
                  dadosComplemntares.push (
                    new TextboxDadosComplementares({
                      key: data['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["chave"] , 
                      label: data['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["titulo"] , 
                      required: false,
                      order: 1, 
                      value: '',
                      controlType: data['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["tipo"] , 
                      leftControl:data['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["posicaoLeftControl"] + 'px', 
                      topControl:data['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["posicaoTopControl"]+'px'  , 
                      positionTopLabel:data['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["positionToptLabel"] + 'px',
                      positionLeftLabel:data['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["positionLeftLabel"] + 'px',
                      WidthControlText:data['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["widthControlText"] + 'px'
                  })

                  );
                  // this.dadosComplemntares.push (    
                  /*  new TextboxDadosComplementares({
                            key: item['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["chave"] , 
                            label: item['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["titulo"] , 
                            required: true,
                            order: 1, 
                            value: '',
                            controlType: item['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["tipo"] , 
                            leftControl:item['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["posicaoLeftControl"], 
                            topControl:item['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["posicaoTopControl"]  , 
                            positionTopLabel:item['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["positionToptLabel"],
                            positionLeftLabel:item['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["positionLeftLabel"],
                            WidthControlText:item['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["widthControlText"]
                        }));   
               */
             
                } 
                else if  ( data['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["tipo"] == 'DropDown' )
                {

                  dadosComplemntares.push (
                  new DropdownDadosComplementares({

                    key: data['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["chave"] , 
                    label: data['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["titulo"] , 
                    required: false,
                    order: 1, 
                    value: '',
                    controlType: data['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["tipo"] , 
                    leftControl:data['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["posicaoLeftControl"] + 'px', 
                    topControl:data['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["posicaoTopControl"]+'px'  , 
                    positionTopLabel:data['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["positionToptLabel"] + 'px',
                    positionLeftLabel:data['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["positionLeftLabel"] + 'px',
                    WidthControlText:data['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["widthControlText"] + 'px',
                    options:JSON.parse(data['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["origem"])
            
                })); 
                console.info('******* Origem **************'); 
               console.info(data['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["origem"] );
                 
                      
              }
              console.info(' *************  oi ********************');  
             /* dadosComplemntares.push( new TextboxDadosComplementares({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                required: true,
                order: 1 
              }));
                    */
             
            }
           
  
       
    } else 
    { 
      console.info( ' SKU não cadastrado    ---------------');   
      new DropdownDadosComplementares({


        
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ]
      });

    }






     
     return dadosComplemntares;
     
     
     
      /* let questions: DadosComplementaresBase<any>[] = [
  
        new DropdownDadosComplementares({
          key: 'brave',
          label: 'Bravery Rating',
          options: [
            {key: 'solid',  value: 'Solid'},
            {key: 'great',  value: 'Great'},
            {key: 'good',   value: 'Good'},
            {key: 'unproven', value: 'Unproven'}
          ],
          order: 3
        }),
  
        new TextboxDadosComplementares({
          key: 'firstName',
          label: 'First name',
          value: 'Bombasto',
          required: true,
          order: 1
        }),
  
        new TextboxDadosComplementares({
          key: 'emailAddress',
          label: 'Email',
          type: 'email',
          order: 2
        })
      ]; */
     // return questions;
    
    }})

    
   );
    });
  }
 
     
    
    
    
  
}




