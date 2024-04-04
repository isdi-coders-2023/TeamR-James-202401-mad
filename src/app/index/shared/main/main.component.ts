import { Component } from '@angular/core';
import HomeComponent from '../../home/home.component';
import MonsterComponent from '../../monster/monster.component';
import ErrorComponent from '../error/error.component';

@Component({
  selector: 'zld-main',
  standalone: true,
  imports: [HomeComponent, MonsterComponent, ErrorComponent],
  template: `
    <main class="main">
      <ng-content></ng-content>
    </main>
  `,
  styles: `
    .main {
      width: 100vw;
      height: 93vh;
      background-image: url('../../../../assets/background.png');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      overflow: auto;
      padding: 50px;
    }
  `,
})
export class MainComponent {
  constructor() {}
}
