import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DataService } from './data-service.service';

describe('DataServiceService', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    // Deprecated const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
  it('should have getData function', () => {
    // Deprecated const service: DataService = TestBed.get(DataService);
    expect(service.getData).toBeTruthy();
  });

  // it('getData should return the value of the API as Observable', (done: DoneFn) => {
  //   service.getData().subscribe((value) => {
  //     expect(value.itemsData).toContain()
  //     done();
  //   });
  // });
});
