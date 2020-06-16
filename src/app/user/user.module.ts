import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { ItemUserComponent } from './components/item-user/item-user.component';
import { PaymentModule } from '../payment/payment.module';
import { ModalModule } from '../modal/modal.module';
import { ConclusionComponent } from '../components/conclusion/conclusion.component';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    ModalModule,
    PaymentModule,
  ],
  declarations: [
    UserComponent,
    ItemUserComponent,
    ConclusionComponent
  ],
  exports: [
    UserComponent,
  ],
})
export class UserModule { }
