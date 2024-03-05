import { finalize } from "rxjs/operators";

import { Component, inject } from "@angular/core";
import { FormArray, ReactiveFormsModule, Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

import { PostService } from "../post-service/post.service";

@Component({
  selector: "app-create-post",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./create-post.component.html",
})
export class CreatePostComponent {
  isSubmitted: boolean = false;
  isLoading: boolean = false;

  private formBuilder = inject(FormBuilder);
  private postService = inject(PostService);
  private router = inject(Router);

  postForm = this.formBuilder.group({
    title: ["", Validators.required],
    body: ["", Validators.required],
    tags: this.formBuilder.array([this.formBuilder.control("")]),
  });

  get tags() {
    return this.postForm.get("tags") as FormArray;
  }
  onSubmit() {
    this.isSubmitted = true;
    if (!this.postForm.valid) {
      return;
    }
    this.isLoading = true;
    this.postService
      .createPost({
        title: this.postForm.get("title")?.value || "",
        body: this.postForm.get("body")?.value || "",
        tags: this.tags.value,
      })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(() => {
        this.router.navigate(["/post"]);
      });
  }
  addTag() {
    this.tags.push(this.formBuilder.control(""));
  }
  deleteTag(index: number) {
    this.tags.removeAt(index);
  }
}
