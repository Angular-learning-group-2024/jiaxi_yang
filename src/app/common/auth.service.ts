import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogedIn = false;

  isUserLogedIn() {
    return this.isLogedIn;
  }

  logedIn() {
    this.isLogedIn = true;
  }

  logout() {
    this.isLogedIn = false;
  }
}
