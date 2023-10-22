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
  getGuides(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/guide`);
  }

  // Tambahkan metode lain sesuai kebutuhan, seperti POST, PUT, DELETE, dll.
}
