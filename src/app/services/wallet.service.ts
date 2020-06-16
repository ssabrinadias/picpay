import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private readonly WALLET_URL = `${environment.WALLET_URL}`;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  public showWallet() {
    return this.httpClient.get(this.WALLET_URL);
  }
}
