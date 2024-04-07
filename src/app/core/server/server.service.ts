import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsData } from '../zelda-items-data';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  url = 'http://localhost:3000/data';

  constructor(private http: HttpClient) {}

  getFavorite(): Observable<ItemsData[]> {
    return this.http.get<ItemsData[]>(this.url);
  }
  postFavorite(data: ItemsData) {
    this.http.post<ItemsData>(this.url, data).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  deleteFavorite(id: number) {
    this.http.delete<ItemsData>(this.url + '/' + id).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }
}
