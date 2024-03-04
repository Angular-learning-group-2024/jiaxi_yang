import { Component, OnInit, inject } from "@angular/core";
import { TPost } from "../post-service/post.interface";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, RouterModule } from "@angular/router";
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
