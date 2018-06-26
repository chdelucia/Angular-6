import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { HolaluzRoutingModule } from './holaluz-routing.module';
import { GrapComponent } from './grap/grap.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  imports: [
    CommonModule,
    HolaluzRoutingModule,
    NgxChartsModule,
    
  ],
  declarations: [GrapComponent]
})
export class HolaluzModule { }
