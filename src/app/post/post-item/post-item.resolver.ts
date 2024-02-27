import { inject } from "@angular/core";
import { ResolveFn, Router } from "@angular/router";
import { TPost } from "../post-service/post.interface";
import { PostService } from "../post-service/post.service";
import { mergeMap } from "rxjs/operators";
import { EMPTY, of } from "rxjs";

export const postItemResolver: ResolveFn<TPost> = (route) => {
  const router = inject(Router);
  const ps = inject(PostService);
  const id = route.paramMap.get("id")!;
  return ps.getPostById(id).pipe(
    mergeMap((post) => {
      if (post) {
        return of(post);
      }
      router.navigate(["/post"]);
      return EMPTY;
    })
  );
};
