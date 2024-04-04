import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'zld-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styles: `
    :host {
      .nav-list {
        display: flex;
        align-items: center;
        flex-direction: column;
        list-style: none;
        background-color: black;
        gap: 5px;
        cursor: pointer;
      }
      .navbar {
        display: flex;

        justify-content: end;
        margin-top: -0.7rem;
        cursor: pointer;
      }
      .nav-list-desk {
        display: none;
      }
      @media (width > 800px) {
        .nav-list {
          display: none;
        }

        .navbar {
          display: none;
        }
        img {
          height: 50px;
          width: 50px;
        }
        .nav-list-desk {
          display: flex;
          align-items: center;
          flex-direction: row;
          list-style: none;
          background-color: black;
          gap: 5px;
        }
      }
    }
  `,
})
export class NavbarComponent {
  isShow = true;
  @ViewChild('nav-list') navElement: ElementRef | undefined;
  constructor() {}
  toggleHidden() {
    this.isShow = !this.isShow;
  }
}
