import { TestBed } from '@angular/core/testing';
import { ServerService } from './server.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ItemsData } from '../zelda-items-data';

describe('ServerService', () => {
  let service: ServerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServerService],
    });
    service = TestBed.inject(ServerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verificar que no haya solicitudes HTTP pendientes
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
    expect(req.request.body).toEqual(newItem); // Verificar el cuerpo de la solicitud
    req.flush({}); // Responder a la solicitud HTTP
  });

  it('should send DELETE request to remove favorite item', () => {
    const itemIdToDelete = 153; // Cambiar a 153 para que coincida con la solicitud DELETE en la prueba

    service.deleteFavorite(itemIdToDelete);

    const req = httpMock.expectOne(`${service.url}/${itemIdToDelete}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({}); // Responder a la solicitud HTTP
  });
});
