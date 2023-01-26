import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankRoutingModule } from './blank-routing.module';
import { BlankComponent } from './blank.component';
import { NgZorroModule } from '../../ng-zorro.module';


@NgModule({
  declarations: [
    BlankComponent
  ],
  imports: [
    CommonModule,
    NgZorroModule,
    BlankRoutingModule
  ]
})
export class BlankModule { }
