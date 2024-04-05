import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';
import { ItemsData } from './zelda-items-data';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StateService', () => {
  let service: StateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StateService],
    }).compileComponents();
    service = TestBed.inject(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getItems should return ...', () => {
    const mockData = '';
    service.loadItems(mockData);
    let items: ItemsData[] = [];
    service.getItems().subscribe((data) => (items = data.data));
    expect(items).toEqual([]);
  });
});
