import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import {tokenNotExpired} from 'angular2-jwt';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  getHeader(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.getTokenRefresh() && !tokenNotExpired(null, this.auth.getToken())) {
      return this.auth.refresh(this.auth.getTokenRefresh())
       .flatMap(data => {
          this.auth.updateToken(data);
          return next.handle(this.getHeader(request, data['token']));
        });
    } else {
      return next.handle(this.getHeader(request, this.auth.getToken()));
     }
  }
}
