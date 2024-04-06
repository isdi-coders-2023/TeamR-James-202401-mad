import { ComponentFixture, TestBed } from '@angular/core/testing';

import ListComponent from './list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from '../../core/data-service.service';
import { StateService } from '../../core/state.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent, HttpClientTestingModule],
      providers: [DataService, StateService],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should load data on initialization', () => {
    expect(component.zeldaItemsData).toBeDefined();
  });
});
