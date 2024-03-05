import { Observable } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

import { BASE_URL } from "../../../constant/api";
import { TCreatePost, TPost } from "./post.interface";

@Injectable({
  providedIn: "root",
})
export class PostService {
  private http = inject(HttpClient);

  getPosts(): Observable<TPost[]> {
    return this.http.get<TPost[]>(`${BASE_URL}/posts`);
  }

  getPostById(id: string): Observable<TPost> {
    return this.http.get<TPost>(`${BASE_URL}/posts/${id}`);
  }

  updatePost(post: TPost): Observable<TPost> {
    return this.http.put<TPost>(`${BASE_URL}/posts/${post.id}`, post);
  }

  createPost(post: TCreatePost): Observable<TPost> {
    return this.http.post<TPost>(`${BASE_URL}/posts`, post);
  }
}
