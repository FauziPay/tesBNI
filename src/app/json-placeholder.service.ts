import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  // Mengambil daftar guide dari API JSONPlaceholder
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/posts`);
  }

  getPostsById(id: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/posts/${id}`);
  }

  deletePosts(id: any): Observable<any[]> {
    return this.http.delete<any[]>(`${this.baseUrl}/posts/${id}`);
  }

  // Tambahkan metode lain sesuai kebutuhan, seperti POST, PUT, DELETE, dll.
}
