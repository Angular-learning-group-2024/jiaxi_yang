import { Observable } from "rxjs";

import { HttpClient, HttpContext } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

import { BASE_URL } from "../../../constant/api";
import { CACHING_ENABLED } from "../../app.interceptor";
import { TCreatePost, TPost } from "./post.interface";

@Injectable({
  providedIn: "root",
})
export class PostService {
  private http = inject(HttpClient);

  getPosts(): Observable<TPost[]> {
    return this.http.get<TPost[]>(`${BASE_URL}/posts`);
  }
  refreshPosts(): Observable<TPost[]> {
    return this.http.get<TPost[]>(`${BASE_URL}/posts`, {
      context: new HttpContext().set(CACHING_ENABLED, false),
    });
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
