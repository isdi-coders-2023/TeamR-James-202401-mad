import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ZeldaItemsData } from './zelda-items-data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseURL = 'https://botw-compendium.herokuapp.com/api/v3/compendium/category/';
  constructor(private http: HttpClient) {}

  getData(category: string = ''): Observable<ZeldaItemsData> {
    const r = this.http.get<ZeldaItemsData>(this.baseURL + `${category}`);
    console.log(r);
    return r;
  }
}
