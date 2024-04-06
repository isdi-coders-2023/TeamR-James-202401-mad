import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'zld-button',
  standalone: true,
  imports: [],
  template: `<button (click)="onClick()">{{ label }}</button>`,
  styles: ``,
})
export class PageButtonComponent {
  @Input() label: string = '';
  @Input() currentPage: number = 1;
  @Output()
  pageChange: EventEmitter<number> = new EventEmitter<number>();

  onClick() {
    this.pageChange.emit();
  }
}
