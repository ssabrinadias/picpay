import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { ItemUserComponent } from './components/item-user/item-user.component';

@NgModule({
  declarations: [
    UserComponent,
    ItemUserComponent,
  ],
  exports: [
    UserComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class UserModule { }
