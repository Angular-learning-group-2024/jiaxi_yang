import { Component, OnInit } from '@angular/core';
import { TTodo, TodoService } from './service/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {
  todos: TTodo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    // Check if todos array is empty before making the API call
    if (this.todos.length === 0) {
      this.getTodos();
    }
  }

  getTodos() {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
}
