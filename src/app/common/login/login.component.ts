import { Component, OnInit, inject } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [],
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;

  private authService = inject(AuthService);
  private router = inject(Router);

  login() {
    this.authService.logIn();
  }

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
      if (loggedIn) {
        this.router.navigate(["/post"]);
      }
    });
  }
}
