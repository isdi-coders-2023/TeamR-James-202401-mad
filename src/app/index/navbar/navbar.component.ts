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
          <a href=""
            ><img
              src="../assets/favorites.svg"
              alt="logoFavorites"
              width="30px"
          /></a>
        </li>
        <li>
          <a href=""
            ><img src="../assets/monsters.svg" alt="logoMonsters" width="30px"
          /></a>
        </li>
        <li>
          <a href=""
            ><img
              src="../assets/treasures.svg"
              alt="logoTreasures"
              width="30px"
          /></a>
        </li>
        <li>
          <a href=""
            ><img
              src="../assets/creatures.svg"
              alt="logoCreatures"
              width="30px"
          /></a>
        </li>
        <li>
          <a href=""
            ><img
              src="../assets/equipment.svg"
              alt="logoEquipament"
              width="30px"
          /></a>
        </li>
        <li>
          <a href=""
            ><img
              src="../assets/materials.svg"
              alt="logoMaterials"
              width="30px"
          /></a>
        </li>
        <li>
          <a href=""
            ><img src="../assets/create.svg" alt="logoCreate" width="30px"
          /></a>
        </li>
      </ul>
    </nav>
  `,
  styles: `
    .nav {
    }

    .navbar {
      display: flex;
      justify-content: end;
      margin-top: -0.7rem;
    }

    .nav-list {
      width: 50vw;
      display: flex;
      align-items: center;

      flex-direction: column;
      list-style: none;
      background-color: black;
      gap: 5px;
    }

    // @media screen and (max-width: 550px) {
    // }
  `,
})
export class NavbarComponent {
  isHidden = true;
  constructor() {}
  toggleHidden() {
    this.isHidden = !this.isHidden;
  }
}
