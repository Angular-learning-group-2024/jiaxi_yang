import { Route } from '@angular/router';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostItemComponent } from './post/post-item/post-item.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './common/login/login.component';

type TRoute = Route;

export const routes: TRoute[] = [
  {
    path: '',
    redirectTo: 'post',
    pathMatch: 'full',
  },
  {
    path: 'post',
    canActivate: [authGuard],
    children: [
      {
        path: ':id',
        component: PostItemComponent,
      },
      {
        path: '',
        component: PostListComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  { path: '**', component: PageNotFoundComponent },
];
