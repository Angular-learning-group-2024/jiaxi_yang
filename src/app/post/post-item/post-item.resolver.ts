import { EMPTY, of } from "rxjs";
import { delay, mergeMap } from "rxjs/operators";

import { inject } from "@angular/core";
import { ResolveFn, Router } from "@angular/router";

import { TPost } from "../post-service/post.interface";
import { PostService } from "../post-service/post.service";

export const postItemResolver: ResolveFn<TPost> = (route) => {
  const router = inject(Router);
  const ps = inject(PostService);
  const id = route.paramMap.get("id")!;
  return ps.getPostById(id).pipe(
    delay(1000),
    mergeMap((post) => {
      if (post) {
        return of(post);
      }
      router.navigate(["/post"]);
      return EMPTY;
    })
  );
};
