import { inject } from "@angular/core";
import { ResolveFn, Router } from "@angular/router";
import { PostService } from "../post-service/post.service";
import { catchError, delay, mergeMap } from "rxjs/operators";
import { EMPTY, of } from "rxjs";
import { TPost } from "../post-service/post.interface";

export const postListResolver: ResolveFn<TPost[]> = () => {
  const router = inject(Router);
  const ps = inject(PostService);
  return ps.getPosts().pipe(
    delay(1000),
    mergeMap((posts) => {
      if (posts) {
        return of(posts.slice(0, 10));
      }
      router.navigate(["/error"]);
      return EMPTY;
    }),
    catchError(() => {
      router.navigate(["/error"]);
      return EMPTY;
    })
  );
};
