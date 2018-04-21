import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { map, catchError } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import { HttpService } from "./http.service";

@Injectable()
export class AuthService {
  private API_Url = 'http://127.0.0.1:8000/api';

  constructor(public http: HttpClient, private httpService: HttpService) {
  }

  /**
   * register User
   * @param {object} user - user object
   */
  public register(user) {
    return this.http.post(`${this.API_Url}/auth/register/`, user).pipe(
      map(this.httpService.getData),
      catchError(this.httpService.handleError)
    );
  }

  /**
   * login user
   * @param {object} creds - object of username and password
   */
  public login(creds) {
    return this.http.post(`${this.API_Url}/auth/login/`, creds).pipe(
      map(this.httpService.getData),
      catchError(this.httpService.handleError)
    );
  }

}
