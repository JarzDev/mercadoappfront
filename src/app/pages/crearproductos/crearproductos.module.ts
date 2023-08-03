import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CrearproductosPageRoutingModule } from './crearproductos-routing.module';

import { CrearproductosPage } from './crearproductos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearproductosPageRoutingModule,
    ReactiveFormsModule 
  ],
  declarations: [CrearproductosPage]
})
export class CrearproductosPageModule {}
