import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { PostListItemComponent } from "../post-list/post-list-item/post-list-item.component";
import { TPost } from "../post-service/post.interface";

@Component({
  selector: "app-post-item",
  standalone: true,
  imports: [PostListItemComponent],
  templateUrl: "./post-item.component.html",
})
export class PostItemComponent implements OnInit {
  postItem: TPost = {} as TPost;
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit() {
    this.route.data.subscribe((data) => {
      const postDetail: TPost = data["postItem"];
      this.postItem = postDetail;
    });
  }

  gotoPostList() {
    this.router.navigate(["/post"]);
  }
  editPost() {
    this.router.navigate(["/post/edit", this.postItem.id]);
  }
}
