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

  it('should change to the next page', () => {
    component.currentPage = 1;
    component.totalPages();
    component.nextPage();
    expect(component.currentPage).toEqual(1);
  });

  it('should not change to the next page if already on the last page', () => {
    component.currentPage = 3;
    component.totalPages();
    component.nextPage();
    expect(component.currentPage).toEqual(3);
  });

  it('should change to the previous page', () => {
    component.currentPage = 2;
    component.prevPage();
    expect(component.currentPage).toEqual(1);
  });

  it('should not change to the previous page if already on the first page', () => {
    component.currentPage = 1;
    component.prevPage();
    expect(component.currentPage).toEqual(1);
  });

  it('should change current page when onPageChange is called', () => {
    const page = 2;
    component.onPageChange(page);
    expect(component.currentPage).toEqual(page);
  });
});
