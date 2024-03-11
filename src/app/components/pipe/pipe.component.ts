import { DatePipe, DecimalPipe, JsonPipe } from "@angular/common";
import { Component } from "@angular/core";

import { ArrayPipe, ImPureArrayPipe } from "./array.pipe";
import { CalculatePipe, ECalculateMode } from "./calculate.pipe";

@Component({
  selector: "app-pipe",
  standalone: true,
  imports: [
    DatePipe,
    DecimalPipe,
    CalculatePipe,
    JsonPipe,
    ArrayPipe,
    ImPureArrayPipe,
  ],
  templateUrl: "./pipe.component.html",
})
export class PipeComponent {
  ECalculateMode = ECalculateMode;

  date = new Date();

  list = [0];

  newList = [0];

  addNumberToList() {
    this.list.push(this.list.length);
    this.newList = [...this.list];
  }
}
