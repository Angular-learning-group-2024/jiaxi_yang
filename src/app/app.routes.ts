import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
  },
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full',
  },
  {
    path: 'second',
    component: SecondComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
];
