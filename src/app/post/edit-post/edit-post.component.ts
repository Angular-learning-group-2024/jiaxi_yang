import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TPost } from "../post-service/post.interface";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { PostService } from "../post-service/post.service";
import { finalize } from "rxjs/operators";
@Component({
  selector: "app-edit-post",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./edit-post.component.html",
})
export class EditPostComponent implements OnInit {
  postItem: TPost = {} as TPost;
  isLoading = false;
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private postService = inject(PostService);

  title = new FormControl("");
  body = new FormControl("");

  ngOnInit() {
    this.route.data.subscribe((data) => {
      const postDetail: TPost = data["postItem"];
      this.postItem = postDetail;
      this.title.setValue(postDetail.title);
      this.body.setValue(postDetail.body);
    });
  }

  submit() {
    this.isLoading = true;
    this.postService
      .updatePost({
        ...this.postItem,
        title: this.title.value || "",
        body: this.body.value || "",
      })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((data) => {
        this.router.navigate(["/post", data.id]);
      });
  }
}
