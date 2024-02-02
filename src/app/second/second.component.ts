import { Component } from '@angular/core';
import { TTodo, TodoService } from '../todo/service/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.less',
})
export class SecondComponent {
  todos: TTodo[] = [];

  constructor(http: TodoService) {
    // http.getTodos().subscribe((todos) => {
    //   this.todos = todos;
    // });
  }
}
