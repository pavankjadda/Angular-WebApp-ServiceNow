import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const currentUser = this.authService.currentUserValue;
    const accessToken = localStorage.getItem("access_token");

    if (currentUser && accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: "Bearer " + accessToken,
        },
      });
    } else if (
      currentUser === null &&
      accessToken !== null &&
      accessToken !== "null"
    ) {
      request = request.clone({
        setHeaders: {
          Authorization: "Bearer " + accessToken,
        },
      });
    }
    return next.handle(request);
  }
}
