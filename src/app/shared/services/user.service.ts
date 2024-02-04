import { User } from './../../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, merge, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  /**
   * Returns User List from Server
   */
  getUsers() {
    return this.http
      .get('https://619dfb19131c600017089234.mockapi.io/api/v1/users')
      .pipe(map((response: any) => response));
  }
}
