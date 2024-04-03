import { Component } from '@angular/core';

@Component({
  selector: 'zld-navbar',
  standalone: true,
  imports: [],
  template: `
    <div class="navbar">
      <img src="../assets/burger.svg" alt="logoBurger" />
      <nav class="nav">
        <ul class="nav-list" hidden>
          <li>
            <a href=""
              ><img src="../assets/favorites.svg" alt="logoFavorites"
            /></a>
          </li>
          <li>
            <a href=""
              ><img src="../assets/monsters.svg" alt="logoMonsters"
            /></a>
          </li>
          <li>
            <a href=""
              ><img src="../assets/treasures.svg" alt="logoTreasures"
            /></a>
          </li>
          <li>
            <a href=""
              ><img src="../assets/creatures.svg" alt="logoCreatures"
            /></a>
          </li>
          <li>
            <a href=""
              ><img src="../assets/equipment.svg" alt="logoEquipament"
            /></a>
          </li>
          <li>
            <a href=""
              ><img src="../assets/materials.svg" alt="logoMaterials"
            /></a>
          </li>
          <li>
            <a href=""><img src="../assets/create.svg" alt="logoCreate" /></a>
          </li>
        </ul>
      </nav>
    </div>
  `,
  styles: `
    .navbar {
      display: flex;
      position: relative;
      left: 4rem;
      padding: 0.5rem;
    }

    @media screen and (max-width: 550px) {
    }
  `,
})
export class NavbarComponent {}
