import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, catchError } from "rxjs/operators";
import { Observable } from "rxjs/Observable";

@Injectable()
export class HttpService {

  public API_BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(public http: HttpClient) {
  }

  /**
   * get posts
   */
  public fetchTasks(): Observable<{}> {
    return this.http
      .get<any>(`${this.API_BASE_URL}/tasks/`)
      .pipe(map(this.getData), catchError(this.handleError));
  }

  /**
   * extract API data
   */
  public getData(res: Response) {
    let data = res;
    console.log(data);
    return data || {};
  }

  /**
   * handle error
   */
  public handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || "";
      errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
