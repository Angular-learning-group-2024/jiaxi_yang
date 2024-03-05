import { CommonModule } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";

import { TPost } from "../post-service/post.interface";
import { PostListItemComponent } from "./post-list-item/post-list-item.component";

@Component({
  selector: "app-post-list",
  standalone: true,
  imports: [CommonModule, RouterModule, PostListItemComponent],
  templateUrl: "./post-list.component.html",
})
export class PostListComponent implements OnInit {
  postList: TPost[] = [];
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  ngOnInit(): void {
    this.getPostList();
  }

  getPostList() {
    this.route.data.subscribe((data) => {
      const postList: TPost[] = data["postList"];
      this.postList = postList;
    });
  }

  gotoCreatePost() {
    this.router.navigate(["/post/create"]);
  }
}
