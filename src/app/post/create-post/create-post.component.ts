import { Component, inject } from "@angular/core";
import { FormArray, ReactiveFormsModule, Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-create-post",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./create-post.component.html",
})
export class CreatePostComponent {
  private formBuilder = inject(FormBuilder);

  postForm = this.formBuilder.group({
    title: ["", Validators.required],
    body: ["", Validators.required],
    tags: this.formBuilder.array([this.formBuilder.control("")]),
  });

  get tags() {
    return this.postForm.get("tags") as FormArray;
  }
  onSubmit() {
    console.log(this.postForm.value, this.postForm);
  }
  addTag() {
    this.tags.push(this.formBuilder.control(""));
  }
}
