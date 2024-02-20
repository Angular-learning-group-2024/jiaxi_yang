import { Component, OnInit } from '@angular/core';
import { TPost } from '../post-service/post.interface';
import { PostService } from '../post-service/post.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit {
  posts: TPost[] = [];

  constructor(private postService: PostService) {}
  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts.slice(0, 10);
    });
  }
}
