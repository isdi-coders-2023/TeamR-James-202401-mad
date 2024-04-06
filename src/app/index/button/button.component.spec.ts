import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: PageButtonComponent;
  let fixture: ComponentFixture<PageButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit pageChange event on button click', () => {
    spyOn(component.pageChange, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.pageChange.emit).toHaveBeenCalled();
  });
});
