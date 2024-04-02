import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'zld-header',
  standalone: true,
  imports: [NavbarComponent],
  template: `
    <header>
      <img
        src="../../../../assets/Zeldalogo3.png"
        alt="Zelda logo"
        aria-label="title"
        width="186"
      />
      <zld-navbar />
    </header>
  `,
  styles: `
    header {
      display: flex;
      position: relative;
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
