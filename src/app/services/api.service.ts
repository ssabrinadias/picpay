import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private USERS_URL = environment.USERS_URL;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  public showUsers() {
    return this.httpClient
      .get<User[]>(this.USERS_URL);
  }
}
