import { ComponentFixture, TestBed } from '@angular/core/testing';

import ListComponent from './list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StateService } from '../../core/state.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

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

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should load data on initialization', () => {
    expect(component.zeldaItemsData).toBeTruthy();
  });
});
