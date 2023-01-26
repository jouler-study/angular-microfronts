import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionRoutingModule } from './inscription-routing.module';
import { InscriptionComponent } from '../inscription/inscription.component';


@NgModule({
  declarations: [
    InscriptionComponent
  ],
  imports: [
    CommonModule,
    InscriptionRoutingModule
  ]
})
export class InscriptionModule { }
