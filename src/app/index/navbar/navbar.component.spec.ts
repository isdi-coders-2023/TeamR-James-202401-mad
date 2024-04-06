import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { of } from 'rxjs/internal/observable/of';
import { ActivatedRoute } from '@angular/router';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    const fakeActivatedRoute = {
      params: of({ category: 'monsters' }),
    };
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggleHidden should assign a value to isHidden opposite to itself', () => {
    const comp = new NavbarComponent();
    expect(comp.isShow).toBe(true);
    comp.toggleHidden();
    expect(comp.isShow).toBe(false);
  });
});
