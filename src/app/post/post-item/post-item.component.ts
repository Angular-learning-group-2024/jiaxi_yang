import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TPost } from "../post-service/post.interface";

@Component({
  selector: "app-post-item",
  standalone: true,
  imports: [],
  templateUrl: "./post-item.component.html",
})
export class PostItemComponent implements OnInit {
  postItem: TPost = {} as TPost;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      const postDetail: TPost = data["postItem"];
      this.postItem = postDetail;
    });
  }

  gotoPostList() {
    this.router.navigate(["/post"]);
  }
}
