import { BehaviorSubject } from "rxjs";

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(true);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  isUserLoggedIn() {
    return this.isLoggedInSubject.value;
  }

  logIn() {
    this.isLoggedInSubject.next(true);
  }

  logOut() {
    this.isLoggedInSubject.next(false);
  }
}
