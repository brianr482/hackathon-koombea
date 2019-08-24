import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private BASE_URL = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  get(page: number, sortBy?: string) {
    let url = this.BASE_URL + '/products';
    url += `?page=${page}`;
    console.log('Sort By', sortBy);
    if (sortBy) {
      url += `&sortBy=${sortBy}`;
    }
    return this.http.get(url);
  }
}
