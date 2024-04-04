import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';
import { ItemsData } from './zelda-items-data';

describe('StateService', () => {
  let service: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getItems should return ...', () => {
    const mockData = [{ id: 1 }, { id: 2 }, { id: 3 }] as ItemsData[];
    service.setItems(mockData);
    let items: ItemsData[] = [];
    service.getItems().subscribe((data) => (items = data.data));
    expect(items).toEqual(mockData);
  });
});
