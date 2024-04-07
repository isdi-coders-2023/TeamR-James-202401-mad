import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ItemsData } from '../../core/zelda-items-data';
import { ServerService } from '../../core/server/server.service';
import FavoriteComponent from './favorite.component';

describe('ServerService', () => {
  let service: ServerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FavoriteComponent, HttpClientTestingModule],
      providers: [ServerService],
    });
    service = TestBed.inject(ServerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send POST request to add favorite item', () => {
    const newItem: ItemsData = {
      id: 123,
      category: 'weapons',
      description: 'New weapon description',
      dlc: false,
      image: 'https://example.com/image.png',
      name: 'New Weapon',
    };

    service.postFavorite(newItem);

    const req = httpMock.expectOne(service.url);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newItem);
    req.flush({});
  });

  it('should send DELETE request to remove favorite item', () => {
    const itemIdToDelete = 153;

    service.deleteFavorite(itemIdToDelete);

    const req = httpMock.expectOne(`${service.url}/${itemIdToDelete}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
