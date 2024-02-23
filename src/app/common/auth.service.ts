import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() {}

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
