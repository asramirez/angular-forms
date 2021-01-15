import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category.interface';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Category[]>(`${environment.url_api}/categories`);
  }

  checkCategory(name: string) {
    return this.http.post(`${environment.url_api}/categories/availability`, { name });
  }
}