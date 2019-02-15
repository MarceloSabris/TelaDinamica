import { AppComponent }                 from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule }                from '@angular/platform-browser';
import { CasaPremiadaComponente } from './CasaPremiada.component';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormDadosComplementaresComponent } from './dynamic-form-DadosComplementares.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule }          from '@angular/common/http';
import { ModuleWithProviders } from "@angular/core";
import { NgModule }                     from '@angular/core';
import { ReactiveFormsModule }          from '@angular/forms';
import {RouterModule} from '@angular/router';
import { VidaProtegidaComponent } from './VidaProtegida.component';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule,HttpClientModule, AppRoutingModule , 
    RouterModule.forRoot([

      {
        path: 'CasaPremiada', 
        component: CasaPremiadaComponente
          

      },
      {
        path: 'VidaProtegida', 
        component: VidaProtegidaComponent
          

      }
  ])
  
  ],
  providers: [],
  declarations: [CasaPremiadaComponente, VidaProtegidaComponent, AppComponent, DynamicFormComponent, DynamicFormDadosComplementaresComponent, HeaderComponent, FooterComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
