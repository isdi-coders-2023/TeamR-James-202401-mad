import { Component } from '@angular/core';

@Component({
  selector: 'zld-header',
  standalone: true,
  imports: [],
  template: `
    <header>
      <img
        src="../../../../assets/Zeldalogo3.png"
        alt="Zelda logo"
        aria-label="title"
        width="186"
      />
    </header>
  `,
  styles: `
    header {
      height: 102px;
      width: 100%;
      background-color: #000000;
      img {
        padding: 1rem;
      }
    }
  `,
})
export class HeaderComponent {}
