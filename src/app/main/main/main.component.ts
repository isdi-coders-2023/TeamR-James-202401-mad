import { Component } from '@angular/core';

@Component({
  selector: 'zld-main',
  standalone: true,
  imports: [],
  template: ` <main class="main"></main> `,
  styles: `
    .main {
      width: 100vw;
      height: 80vh;
      background-image: url('./assets/background.png');
    }
  `,
})
export class MainComponent {}
