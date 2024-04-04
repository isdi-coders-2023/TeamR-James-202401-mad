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
        width="75px"
      />
      <zld-navbar></zld-navbar>
    </header>
  `,
  styles: `
    header {
      height: 70px;
      display: flex;
      justify-content: space-between;
      padding: 1.2rem;
      background-color: #000000;
    }

    @media (width > 1090px) {
      header {
        height: 20vh;
      }
      img {
        width: 300px;
      }
    }
  `,
})
export class HeaderComponent {}
