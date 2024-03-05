import { UpperCasePipe } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { TPost } from "../../post-service/post.interface";

@Component({
  selector: "app-post-list-item",
  standalone: true,
  imports: [RouterModule, UpperCasePipe],
  templateUrl: "./post-list-item.component.html",
})
export class PostListItemComponent {
  @Input({
    required: true,
  })
  postItem!: TPost;
}
