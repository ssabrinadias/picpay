import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormControl, FormGroup, Validators  } from '@angular/forms';

import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  wallets: any[] = [];
  submitted = false;
  payForm: FormGroup;

  @Input() userChoice: any;

  constructor(private walletService: WalletService) { }

  ngOnInit() {
    this.walletService.showWallet()
        .subscribe ((data: any[]) => this.wallets = (data[0] || []).cards,
        err => console.log(err.message)
    );
    this.payForm = new FormGroup({
      amount: new FormControl(''),
      card: new FormControl(this.wallets[0], Validators.required),
    });
  }

  onSubmit(payForm: NgForm): void {
    console.log(this.payForm);
    this.submitted = true;
  }

}
