import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TPost} from "../post-service/post.interface";
import {PostService} from "../post-service/post.service";

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [],
  templateUrl: './post-item.component.html',
})
export class PostItemComponent implements OnInit {
  postDetail: TPost = {} as TPost

  constructor(private route: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    if (!postId) {
      return
    }

    this.postService.getPostById(postId).subscribe(postDetail => {
      this.postDetail = postDetail
    })

  }
}
