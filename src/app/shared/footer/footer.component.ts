import { Component } from '@angular/core';

@Component({
  selector: 'zld-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <nav>
        <a href="https://twitter.com/zeldauniverse?lang=es"
          ><img src="../assets/VectorTw.svg" alt="logox" width="22" /></a
        ><a href="https://www.instagram.com/zeldanintendo/?hl=es"
          ><img src="../assets/Vector.svg" alt="logoinstagram"
        /></a>
      </nav>
    </footer>
  `,
  styles: `
    footer {
      background-color: black;
      width: 100vw;
      margin: 0px;
    }
    nav {
      display: flex;
      justify-content: end;
      gap: 15px;
      padding: 10px;
    }
  `,
})
export class FooterComponent {}
