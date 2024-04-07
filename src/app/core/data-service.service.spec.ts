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
    const service: DataService = TestBed.inject(DataService);
    expect(service).toBeTruthy();
  });
  it('should have getData function', () => {
    const service: DataService = TestBed.inject(DataService);
    expect(service.getData).toBeTruthy();
  });
  it('should call getData function', () => {
    spyOn(console, 'log').and.callThrough();
    service.getData('monsters');
    expect(console.log).toHaveBeenCalled();

    service.getData('monsters');
    expect(console.log).toHaveBeenCalled();
  });
});
