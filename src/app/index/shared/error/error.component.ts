import { Component } from '@angular/core';

@Component({
  selector: 'zld-error',
  standalone: true,
  imports: [],
  template: `<div class="error"></div>`,
  styles: `
    :host {
      display: flex;
      background-color: #ffffff;
      align-items: center;
      background-repeat: no-repeat;
      height: 80vh;
      width: 100vw;

      @media (width > 1090px) {
        .error {
          background-image: url('../../../../assets/errorDesktop.png');
        }
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    .error {
      background-image: url('../../../../assets/error.jpg');
      background-size: contain;
      height: 80vh;
      width: 100vw;
      background-repeat: no-repeat;
    }
  `,
})
export default class ErrorComponent {}
