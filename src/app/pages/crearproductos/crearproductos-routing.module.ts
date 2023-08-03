import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearproductosPage } from './crearproductos.page';

const routes: Routes = [
  {
    path: '',
    component: CrearproductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearproductosPageRoutingModule {}
