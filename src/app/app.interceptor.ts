import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";

import {
  HttpContextToken,
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";

export const CACHING_ENABLED = new HttpContextToken<boolean>(() => true);

export function loggingInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  console.log(req.url);
  return next(req);
}

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const reqWithHeader = req.clone({
    headers: req.headers
      .set("X-New-Header", "new header value")
      .set("Authorization", "Bearer 1234567890"),
  });
  return next(reqWithHeader);
}

const cache: Map<string, HttpResponse<any>> = new Map();

export function cachingInterceptor(
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> {
  if (req.context.get(CACHING_ENABLED)) {
    const cachedResponse = cache.get(req.url);
    if (cachedResponse) {
      return of(cachedResponse.clone());
    }
    return next(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          cache.set(req.url, event.clone());
        }
      })
    );
  }
  return next(req);
}
