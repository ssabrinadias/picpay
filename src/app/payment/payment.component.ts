import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormControl, FormGroup, Validators  } from '@angular/forms';

import { WalletService } from '../services/wallet.service';
import { PayService } from './_service/pay.service';
import { TransactionPayload } from '../interfaces/transactionPayload';
// import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  wallets: any[] = [];
  submitted = false;
  payForm: FormGroup;
  responsePay: TransactionPayload;

  @Input() userChoice: any;
  @Input() reciverConclusion: any;
  @Output() conclusion = new EventEmitter();

  constructor(private payService: PayService, private walletService: WalletService) { }

  ngOnInit() {
    this.walletService.showWallet()
        .subscribe ((data: any[]) => this.wallets = (data[0] || []).cards,
        err => console.log(err.message)
    );
    this.payForm = new FormGroup({
      amount: new FormControl(''),
      userChoice: new FormControl(),
      card: new FormControl(this.wallets[0], Validators.required),
    });
  }

  onSubmit(payForm: NgForm): void {
    const {value: {value, token, destination_user_id}} =  payForm;
    this.payService.requestPay({
      token,
      value,
      destination_user_id
    }).subscribe ((data: TransactionPayload) => this.conclusion.emit({status: 'success'}));
  }

}
