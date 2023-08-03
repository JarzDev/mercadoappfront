import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutroPage } from './outro.page';

const routes: Routes = [
  {
    path: '',
    component: OutroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutroPageRoutingModule {}
