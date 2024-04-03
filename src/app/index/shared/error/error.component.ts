import { Component } from '@angular/core';

@Component({
  selector: 'zld-error',
  standalone: true,
  imports: [],
  template: `<div class="background"></div>`,
  styles: `
    .background {
      background-image: url(../../../../assets/error.webp);
      background: fixed;
    }
  `,
})
export default class ErrorComponent {}
