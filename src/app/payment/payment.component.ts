import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor() { }
  @Input() userChoice: any;

  submitted = false;

  onSubmit(payForm: NgForm): void { this.submitted = true; }

  ngOnInit() {
  }

}
