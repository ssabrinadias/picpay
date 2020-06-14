import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  public showUsers() {
    return this.httpClient.get(this.SERVER_URL);
  }
}
