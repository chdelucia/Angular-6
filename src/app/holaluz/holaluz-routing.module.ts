import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrapComponent } from './grap/grap.component';

const routes: Routes = [
  {
    path: '',
    component: GrapComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolaluzRoutingModule { }
