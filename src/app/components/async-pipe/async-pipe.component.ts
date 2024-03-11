import { Observable, interval } from "rxjs";
import { map, startWith, take } from "rxjs/operators";

import { AsyncPipe } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-hero-async-message",
  template: ` <h2 clsss="text-xxl">Async Messages and AsyncPipe</h2>
    <p>{{ message$ | async }}</p>
    <button type="button" (click)="resend()">Resend Messages</button>`,
  imports: [AsyncPipe],
})
export class AsyncPipeComponent {
  message$: Observable<string>;
  private messages = [
    "You are my hero!",
    "You are the best hero!",
    "Will you be my hero?",
  ];
  constructor() {
    this.message$ = this.getResendObservable();
  }
  resend() {
    this.message$ = this.getResendObservable();
  }
  private getResendObservable() {
    return interval(1000).pipe(
      take(this.messages.length),
      map((i) => `Message #${i + 1}: ${this.messages[i]}`),
      startWith("Waiting for messages...")
    );
  }
}
