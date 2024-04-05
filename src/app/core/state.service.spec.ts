import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';
import { ItemsData, ZeldaItemsData } from './zelda-items-data';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from './data-service.service';
import { of } from 'rxjs';

describe('StateService', () => {
  let service: StateService;
  let httpService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StateService],
    }).compileComponents();
    service = TestBed.inject(StateService);
    httpService = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getItems should return ...', () => {
    spyOn(httpService, 'getData').and.returnValue(
      of({ data: [] } as ZeldaItemsData),
    );
    const mockData = '';
    service.loadItems(mockData);
    let items: ItemsData[] = [];
    service.getItems().subscribe((data) => (items = data.data));
    expect(items).toEqual([]);
    expect(httpService.getData).toHaveBeenCalledWith(mockData);
  });
});
