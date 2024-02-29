import { Component, EventEmitter, Output } from "@angular/core";

export type TPerson = {
  name: string;
  age: number;
};

@Component({
  selector: "app-custom-events",
  standalone: true,
  imports: [],
  templateUrl: "./custom-events.component.html",
})
export class CustomEventsComponent {
  @Output()
  customEvent = new EventEmitter<TPerson>();
  onClick() {
    console.log("clicked");
    this.customEvent.emit({
      name: "Tom",
      age: 12,
    });
  }
}
