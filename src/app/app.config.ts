import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideClientHydration } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";

import {
  authInterceptor,
  cachingInterceptor,
  loggingInterceptor,
} from "./app.interceptor";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        authInterceptor,
        loggingInterceptor,
        cachingInterceptor,
      ])
    ),
  ],
};
