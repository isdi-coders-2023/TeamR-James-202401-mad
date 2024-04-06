import { ComponentFixture, TestBed } from '@angular/core/testing';

import DetailsComponent from './details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StateService } from '../../core/state.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsComponent, HttpClientTestingModule],
      providers: [
        StateService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ category: 'details' }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
