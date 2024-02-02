import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export type TTodo = {
  id: number;
  title: string;
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  baseUrl = 'https://jsonplaceholder.typicode.com';
  private cachedTodos: TTodo[] = [];

  constructor(private http: HttpClient) {}

  getTodos(): Observable<TTodo[]> {
    // Check if data is already cached
    if (this.cachedTodos.length > 0) {
      return of(this.cachedTodos);
    }
    // Fetch data from the API and cache it
    return this.http.get<TTodo[]>(`${this.baseUrl}/todos`).pipe(
      map((todos) => {
        this.cachedTodos = todos;
        return todos;
      }),
      catchError((error) => {
        console.error('Error fetching todos', error);
        return of([]); // Return empty array in case of an error
      })
    );
  }
}
