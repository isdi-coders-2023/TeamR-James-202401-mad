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
      height: 80vh;
      background-image: url('../../../../assets/background.png');
      display: flex;

      align-items: center;
      justify-content: center;
    }
  `,
})
export class MainComponent {
  constructor() {}
}
