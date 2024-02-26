import { Injectable } from "@angular/core";
import { BASE_URL } from "../../../constant/api";
import { HttpClient } from "@angular/common/http";
import { TPost } from "./post.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<TPost[]> {
    return this.http.get<TPost[]>(`${BASE_URL}/posts`);
  }

  getPostById(id: string): Observable<TPost> {
    return this.http.get<TPost>(`${BASE_URL}/posts/${id}`);
  }
}
