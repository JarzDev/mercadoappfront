import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutroPageRoutingModule } from './outro-routing.module';

import { OutroPage } from './outro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutroPageRoutingModule
  ],
  declarations: [OutroPage]
})
export class OutroPageModule {}
