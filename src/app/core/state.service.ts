import { Injectable } from '@angular/core';
import { ItemsData } from './zelda-items-data';
import { BehaviorSubject, Observable } from 'rxjs';

// const initialState: ItemsData[] = [
//   {
//     category: '',
//     common_locations: [],
//     description: '',
//     dlc: false,
//     drops: [],
//     id: 0,
//     image: '',
//     name: '',
//     cooking_effect: '',
//     hearts_recovered: 0,
//     properties: {
//       attack: 0,
//       defense: 0,
//     },
//     edible: false,
//   },
// ];

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
