import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  private readonly API = `${environment.API }'5d531c4f2e0000620081ddce'`;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  public showUsers() {
    return this.httpClient.post(this.API, '{}');
  }
}
