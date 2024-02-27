import { Component, OnInit } from "@angular/core";
import { TPost } from "../post-service/post.interface";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, RouterModule } from "@angular/router";

@Component({
  selector: "app-post-list",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./post-list.component.html",
})
export class PostListComponent implements OnInit {
  postList: TPost[] = [];

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.getPostList();
  }

  getPostList() {
    this.route.data.subscribe((data) => {
      const postList: TPost[] = data["postList"];
      this.postList = postList;
    });
  }
}
