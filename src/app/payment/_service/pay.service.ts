import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {environment} from '../../../environments/environment';
import {TransactionPayload} from '../../interfaces/transactionPayload';
import { WalletToken } from './../../interfaces/walletToken';
import { RequestPayment } from './../../interfaces/requestPayment';
import { WalletSecurity } from './../../interfaces/walletSecurity';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  private readonly REQUEST_PAY = `${environment.API }'5d542ec72f000048248614b3'`;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  private walletSecurity(walletToken: WalletToken): WalletSecurity {
    return  {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    };
  }

  private user(): any {
    return {user_id: 'dd3e19adf9b4dc5d11eb8b287e16e3ac'};
  }

  public requestPay({token, value, destination_user_id}: RequestPayment): any {
    const user: string = (this.user() || {}).user_id; // TODO user service

    const {card_number, cvv, expiry_date} = this.walletSecurity({
        token,
        user_id : user
    });

    return this.httpClient
      .post<TransactionPayload[]>(this.REQUEST_PAY, {
        card_number,
        cvv,
        expiry_date,
        destination_user_id,
        value
      });
  }
}
