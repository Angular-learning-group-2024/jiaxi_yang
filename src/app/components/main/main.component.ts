import { Component } from "@angular/core";
import { AttributeSelectorComponent } from "../attribute-selector/attribute-selector.component";
import {
  CustomEventsComponent,
  TPerson,
} from "../custom-events/custom-events.component";

@Component({
  selector: "app-main",
  standalone: true,
  imports: [AttributeSelectorComponent, CustomEventsComponent],
  templateUrl: "./main.component.html",
})
export class ComponentPlayGround {
  onClick() {
    console.log("clicked");
  }

  onCustomEventsClick(p: TPerson) {
    console.log("custom events clicked:", p.name, p.age);
  }
}
