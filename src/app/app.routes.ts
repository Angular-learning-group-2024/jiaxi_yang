import { Route } from "@angular/router";
import { PostListComponent } from "./post/post-list/post-list.component";
import { PostItemComponent } from "./post/post-item/post-item.component";
import { PageNotFoundComponent } from "./common/page-not-found/page-not-found.component";
import { authGuard } from "./auth.guard";
import { LoginComponent } from "./common/login/login.component";
import { CanDeactivateComponent } from "./route-guards/can-deactivate/can-deactivate.component";
import { RouteGuardsComponent } from "./route-guards/route-guards.component";
import { canDeactivateGuard } from "./can-deactivate.guard";
import { postItemResolver } from "./post/post-item/post-item.resolver";
import { postListResolver } from "./post/post-list/post-list.resolver";
import { PageErrorComponent } from "./common/page-error/page-error.component";

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

  { path: "**", component: PageNotFoundComponent },
];
