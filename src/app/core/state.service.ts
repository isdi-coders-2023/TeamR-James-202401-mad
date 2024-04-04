import { Injectable } from '@angular/core';
import { ItemsData } from './zelda-items-data';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private state$: BehaviorSubject<{ data: ItemsData[] }> = new BehaviorSubject<{
    data: ItemsData[];
  }>({ data: [] });
  constructor() {}

  getItems(): Observable<{ data: ItemsData[] }> {
    return this.state$.asObservable();
  }

  setItems(data: ItemsData[]): void {
    this.state$.next({ data: data });
  }
}
