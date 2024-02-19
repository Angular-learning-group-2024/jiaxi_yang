import { Routes, Route } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { TodoComponent } from './todo/todo.component';
import { FormComponent } from './form/form.component';

type TRoute = Route & {
  name: string;
};

export const routes: TRoute[] = [
  {
    path: 'first',
    component: FirstComponent,
    name: 'First Component',
  },
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full',
    name: 'Todo Component',
  },
  {
    path: 'second',
    name: 'Second Component',
    component: SecondComponent,
  },
  {
    path: 'todo',
    name: 'Todo Component',
    component: TodoComponent,
  },
  {
    path: 'form',
    component: FormComponent,
    name: 'Form Component',
  },
];
