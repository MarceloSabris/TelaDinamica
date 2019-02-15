import { RouterModule, Routes } from '@angular/router';

import { CasaPremiadaComponente } from './CasaPremiada.component';
import { NgModule }             from '@angular/core';

const routes: Routes = [
  { path: 'CasaPremiada', component: CasaPremiadaComponente }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {
 

}
