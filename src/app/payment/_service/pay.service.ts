
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {WalletService} from '../../services/wallet.service';
import {environment} from '../../../environments/environment';
import {TransactionPayload} from '../../interfaces/transactionPayload';
// import { WalletToken } from './../../interfaces/walletToken';
import { RequestPayment } from './../../interfaces/requestPayment';
import { WalletSecurity } from './../../interfaces/walletSecurity';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  private readonly REQUEST_PAY = environment.TRANSACTION_URL;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  cardToken: any[] = [];

  constructor(
    private httpClient: HttpClient,
    private walletService: WalletService
  ) { }

  private user(): any {
    return {user_id: 'dd3e19adf9b4dc5d11eb8b287e16e3ac'}; // TODO user service
  }

  public  requestPay({token, value, destination_user_id}: RequestPayment): any {
    const user: string = (this.user() || {}).user_id;

    return  this.walletService.decryptionWallet(token)
      .pipe(switchMap(card => {
        const {card_number, cvv, expiry_date } = card;
        return this.httpClient
          .post<TransactionPayload[]>(this.REQUEST_PAY, {
            card_number,
            cvv,
            expiry_date,
            destination_user_id,
            value
          });
      }))
    ;
  }
}
