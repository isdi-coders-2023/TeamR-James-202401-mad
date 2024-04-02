import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'zld-header',
  standalone: true,
  imports: [NavbarComponent],
  template: `
    <header>
      <zld-navbar />
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
    zld-navbar {
      display: flex;
      justify-content: end;
    }
  `,
})
export class HeaderComponent {}
