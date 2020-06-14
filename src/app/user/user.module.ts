import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    UserComponent,
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
