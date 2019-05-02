import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Inject, Injectable, InjectionToken} from "@angular/core";
import {Observable} from "rxjs";
import {timeout} from "rxjs/operators";

export const DEFAULT_TIMEOUT=new InjectionToken<number>('defaultTimeout');

@Injectable()
export class TimeoutInterceptorService implements HttpInterceptor
{
  constructor(@Inject(DEFAULT_TIMEOUT) protected defaultTimeout: number)
  {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    const timeoutValue=Number(req.headers.get('timeout'))||this.defaultTimeout;

    return next.handle(req).pipe(timeout(20000));
  }
}
