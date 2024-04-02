import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { ItemsData } from './zelda-items-data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  baseURL = 'https://botw-compendium.herokuapp.com/api/v3/compendium/';
  getData(): Observable<ItemsData | undefined> {
    return this.http.get<ItemsData>(this.baseURL).pipe(
      catchError((error) => {
        console.log(error);
        return of(undefined);
      }),
    );
  }
}
