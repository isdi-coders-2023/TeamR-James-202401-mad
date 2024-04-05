import { ComponentFixture, TestBed } from '@angular/core/testing';

import ListComponent from './list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StateService } from '../../core/state.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ItemsData } from '../../core/zelda-items-data';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let state: StateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent, HttpClientTestingModule],
      providers: [
        StateService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ category: 'monsters' }),
          },
        },
      ],
    }).compileComponents();
    state = TestBed.inject(StateService);
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should load data on initialization', () => {
    expect(component.category).toEqual('monsters');

    expect(component.zeldaItemsData).toBeTruthy();
  });
  it('should load data on initialization', () => {
    const mockData = [{ id: 1 } as ItemsData, { id: 2 } as ItemsData];
    spyOn(state, 'getItems').and.returnValue(of({ data: mockData }));
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.zeldaItemsData).toEqual({ data: mockData });
    expect(state.getItems).toHaveBeenCalled();
  });
});
