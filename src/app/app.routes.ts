import { Route } from "@angular/router";

import { authGuard } from "./auth.guard";
import { canDeactivateGuard } from "./can-deactivate.guard";
import { LoginComponent } from "./common/login/login.component";
import { PageErrorComponent } from "./common/page-error/page-error.component";
import { PageNotFoundComponent } from "./common/page-not-found/page-not-found.component";
import { ComponentPlayGround } from "./components/main/main.component";
import { EditPostComponent } from "./post/edit-post/edit-post.component";
import { PostItemComponent } from "./post/post-item/post-item.component";
import { postItemResolver } from "./post/post-item/post-item.resolver";
import { PostListComponent } from "./post/post-list/post-list.component";
import { postListResolver } from "./post/post-list/post-list.resolver";
import { CanDeactivateComponent } from "./route-guards/can-deactivate/can-deactivate.component";
import { RouteGuardsComponent } from "./route-guards/route-guards.component";

type TRoute = Route;

export const routes: TRoute[] = [
  {
    path: "",
    redirectTo: "post",
    pathMatch: "full",
  },
  {
    path: "post",
    canActivate: [authGuard],
    children: [
      {
        path: ":id",
        component: PostItemComponent,
        resolve: {
          postItem: postItemResolver,
        },
      },
      {
        path: "",
        component: PostListComponent,
        resolve: {
          postList: postListResolver,
        },
      },
      {
        path: "edit/:id",
        component: EditPostComponent,
        resolve: {
          postItem: postItemResolver,
        },
      },
    ],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "error",
    component: PageErrorComponent,
  },
  {
    path: "route-guards",
    component: RouteGuardsComponent,
    children: [
      {
        path: "can-deactivate",
        component: CanDeactivateComponent,
        canDeactivate: [canDeactivateGuard],
      },
    ],
  },
  {
    path: "component-playground",
    component: ComponentPlayGround,
  },
  { path: "**", component: PageNotFoundComponent },
];
