import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { DadosComplementaresBase } from '../DadosComplementares-base';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { ServicoDadoComplementar } from '../ServicoDadoComplementar';
import { TextboxDadosComplementares } from '../DadosComplementares-textbox';

@Injectable({
  providedIn: 'root'
})
export  class RestService {

  private propertyParamMap: any;
  private dadosComplemntares: DadosComplementaresBase<any>[] =[];

  
  constructor(private http: HttpClient ,    ) {
    this.propertyParamMap = {
      'idServicoTipo': 'idServicoTipo'
    }; 
  }

 
  endpoint = 'https://localhost:44348/servicodadocomplementar';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  public   async geFields (id:number )  : Promise<DadosComplementaresBase<any>[]>  {
    console.info( ' ***************** geFields  ********************* ');  
    await this.getCampos(11);  
     console.info( this.dadosComplemntares); 
   return   this.dadosComplemntares;
  }
  
  
  
  async getCampos(id:Number)  {
     this.http.get(this.endpoint +'?IdSku='+  id).subscribe(item => {
        console.info( item['ServicoDadoComplementar']);    
        let dadosComplemntares: DadosComplementaresBase<any>[] = [ ]; 
        if (item['ServicoDadoComplementar']) {
          console.info( ' ----------------  SKU cadastrado---------------');    
             if (item['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'])
              { 
                for (let keyProperty in item['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar']) {        
                  if ( item['ServicoDadoComplementar'][0]['servicoCampoDadoComplementar'] [keyProperty]["tipo"] == 'Text' )
                  {
                    console.info( 'SKU - entrou  dadosComplemntares '); 
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
                 
                   
                        
                }
                console.info(' *************  oi ********************');  
                this.dadosComplemntares.push( new TextboxDadosComplementares({
                  key: 'firstName',
                  label: 'First name',
                  value: 'Bombasto',
                  required: true,
                  order: 1 
                }));

               
              }
              else 
              { 
                console.info( 'Campos não cadastrados.');  
    
              }
    
         
      } else 
      { 
        console.info( ' SKU não cadastrado    ---------------');   
      }
                       
      }, error => console.log('Could not load todos.'));
  }
}