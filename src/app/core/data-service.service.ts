import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ZeldaItemsData } from './zelda-items-data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  baseURL = 'https://botw-compendium.herokuapp.com/api/v3/compendium/';

  getData(): Observable<ZeldaItemsData> {
    return this.http.get<ZeldaItemsData>(this.baseURL);
  }
}
