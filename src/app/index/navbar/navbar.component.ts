import { Component } from '@angular/core';

@Component({
  selector: 'zld-navbar',
  standalone: true,
  imports: [],
  template: `
    <div class="navbar">
      <img
        src="../assets/burger.svg"
        alt="burgermenuicon"
        (click)="toggleHidden()"
        (keyup)="toggleHidden()"
        tabindex="0"
        role="button"
        aria-label="button"
      />
    </div>
    <nav class="nav" [hidden]="isHidden">
      <ul class="nav-list">
        <li>
          <a href="/favorites">
            <img
              src="../assets/favorites.svg"
              alt="logoFavorites"
              width="30px"
            />
          </a>
        </li>
        <li>
          <a href="/monsters"
            ><img src="../assets/monsters.svg" alt="logoMonsters" width="30px"
          /></a>
        </li>
        <li>
          <a href="/treasures"
            ><img
              src="../assets/treasures.svg"
              alt="logoTreasures"
              width="30px"
          /></a>
        </li>
        <li>
          <a href="/creatures"
            ><img
              src="../assets/creatures.svg"
              alt="logoCreatures"
              width="30px"
          /></a>
        </li>
        <li>
          <a href="/equipment"
            ><img
              src="../assets/equipment.svg"
              alt="logoEquipament"
              width="30px"
          /></a>
        </li>
        <li>
          <a href="/materials"
            ><img
              src="../assets/materials.svg"
              alt="logoMaterials"
              width="30px"
          /></a>
        </li>
        <li>
          <a href="/create"
            ><img src="../assets/create.svg" alt="logoCreate" width="30px"
          /></a>
        </li>
      </ul>
    </nav>
  `,
  styles: `
    :host {
      .nav-list {
        display: flex;
        align-items: center;
        flex-direction: column;
        list-style: none;
        background-color: black;
        gap: 5px;
      }
      .navbar {
        display: flex;
        justify-content: end;
        margin-top: -0.7rem;
      }
      @media (width > 1090px) {
        .nav-list {
          display: flex;
          flex-direction: row;
        }
        .nav {
          visibility: visible;
        }
        .navbar {
          display: none;
        }
        img {
          height: 100px;
          width: 100px;
        }
      }
    }
  `,
})
export class NavbarComponent {
  isHidden = true;
  constructor() {}
  toggleHidden() {
    this.isHidden = !this.isHidden;
  }
}
