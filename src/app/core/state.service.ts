import { Injectable } from '@angular/core';
import { ItemsData } from './zelda-items-data';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataService } from './data-service.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private state$: BehaviorSubject<{ data: ItemsData[] }> = new BehaviorSubject<{
    data: ItemsData[];
  }>({ data: [] });
  constructor(private repo: DataService) {}

  getItems(): Observable<{ data: ItemsData[] }> {
    return this.state$.asObservable();
  }

  loadItems(category: string): void {
    this.repo.getData(category).subscribe({
      next: (itemsData) => {
        this.state$.next(itemsData);
      },
    });
  }
}
