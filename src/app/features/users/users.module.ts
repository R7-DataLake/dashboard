import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { NgZorroModule } from '../../ng-zorro.module';
import { ModalNewUserComponent } from './modals/modal-new-user/modal-new-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    ModalNewUserComponent
  ],
  imports: [
    CommonModule,
    NgZorroModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
