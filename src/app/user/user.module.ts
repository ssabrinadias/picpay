import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { ItemUserComponent } from './components/item-user/item-user.component';
import { ModalModule } from '../components/modal/modal.module';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    ModalModule
  ],
  declarations: [
    UserComponent,
    ItemUserComponent,
  ],
  exports: [
    UserComponent
  ],
})
export class UserModule { }
