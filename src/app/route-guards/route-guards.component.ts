import { Component } from "@angular/core";
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-route-guards",
  standalone: true,
  imports: [RouterOutlet, RouterModule, RouterLink],
  templateUrl: "./route-guards.component.html",
})
export class RouteGuardsComponent {}
