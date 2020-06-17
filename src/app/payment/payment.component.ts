import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormControl, FormGroup, Validators  } from '@angular/forms';

import { WalletService } from '../services/wallet.service';
import { PayService } from './_service/pay.service';
import { TransactionPayload } from '../interfaces/transactionPayload';

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
  amoutError: boolean;

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
    const {value: {amount, card, userChoice}} =  payForm;

    if (!amount) { // todo melhorar validações
      this.amoutError = true;
      return;
    }

    this.payService.requestPay({
      token: card,
      value: amount,
      destination_user_id : userChoice
    }).subscribe ((data: TransactionPayload) => this.conclusion.emit({
      status: card === '9e636fa59376e360cf1a4f246bd1beec' ? 'success' : 'error' // return simulation for error
    }));
  }

}
