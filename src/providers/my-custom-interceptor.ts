import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, catchError} from 'rxjs/operators';
import { Observable } from "rxjs/Observable";

@Injectable()
export class MyCustomInterceptor implements HttpInterceptor {

  constructor(public http: HttpClient) {}

  intercept( req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // get token
    const token = localStorage.getItem('token');

    // add token to the headers if any
    if (token) {
      req = req.clone({
        headers: req.headers.set("Authorization", `JWT ${token}`)
      });
    }

    // set request to default content type
    if (!req.headers.has("Content-Type")) {
      req = req.clone({
        headers: req.headers.set("Content-Type", "application/json")
      });
    }

    // set accept header
    req = req.clone({
      headers: req.headers.set("Accept", "application/json")
    });

    return next.handle(req);
  }
}
