import { Component } from '@angular/core';

@Component({
  selector: 'app-first-child',
  standalone: true,
  imports: [],
  templateUrl: './first-child.component.html',
})
export class FirstChildComponent {
  count = 0;

  addCount() {
    this.count++;
  }

  minusCount() {
    this.count--;
  }
  resetCount() {
    this.count = 0;
  }
}
