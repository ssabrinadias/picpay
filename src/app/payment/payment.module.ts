import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PaymentComponent } from './payment.component';

@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PaymentComponent]
})
export class PaymentModule { }
