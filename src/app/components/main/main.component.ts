import { Component } from "@angular/core";
import { AttributeSelectorComponent } from "../attribute-selector/attribute-selector.component";

@Component({
  selector: "app-main",
  standalone: true,
  imports: [AttributeSelectorComponent],
  templateUrl: "./main.component.html",
})
export class ComponentPlayGround {
  onClick() {
    console.log("clicked");
  }
}
