import { Component } from '@angular/core';
import { FirstChildComponent } from './first-child/first-child.component';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [FirstChildComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.less',
})
export class FirstComponent {}
