import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';

import {Wallet} from '../interfaces/wallet';
import { WalletSecurity } from './../interfaces/walletSecurity';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private readonly WALLET_URL = `${environment.WALLET_URL}`;
  private readonly WALLET_TOKEN_URL = `${environment.WALLET_TOKEN_URL}`;

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  public decryptionWallet(token: string) {
    const url = this.WALLET_TOKEN_URL + '007eb8e5b98002a2a19c6952a70c91b0';
    return this.httpClient
      .get<WalletSecurity>(url);
  }

  public showWallet() {
    return this.httpClient
      .get<Wallet[]>(this.WALLET_URL);
  }
}
