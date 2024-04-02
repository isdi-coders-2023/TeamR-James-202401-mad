import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'zld-main',
  standalone: true,
  imports: [HomeComponent],
  template: `
    <main class="main">
      <ng-content></ng-content>
    </main>
  `,
  styles: `
    .main {
      width: 100vw;
      height: 80vh;
      background-image: url('../../../assets/background.png');
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
})
export class MainComponent {}
