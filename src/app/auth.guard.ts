import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

import { AuthService } from "./common/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService) as AuthService;
  const router = inject(Router);
  const isLoggedIn = authService.isUserLoggedIn();
  if (!isLoggedIn) {
    router.navigate(["/login"]);
    return false;
  }
  return isLoggedIn;
};
