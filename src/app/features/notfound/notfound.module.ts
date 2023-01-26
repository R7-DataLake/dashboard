import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotfoundRoutingModule } from './notfound-routing.module';
import { NotfoundComponent } from './notfound.component';
import { NgZorroModule } from '../../ng-zorro.module';


@NgModule({
  declarations: [
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    NgZorroModule,
    NotfoundRoutingModule
  ]
})
export class NotfoundModule { }
