import { Route } from '@angular/router';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostItemComponent } from './post/post-item/post-item.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

type TRoute = Route;

export const routes: TRoute[] = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  {
    path: 'posts',
    component: PostListComponent,
  },
  {
    path: 'post/:id',
    component: PostItemComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];
