import { Component } from '@angular/core';
import ListComponent from '../list/list.component';

@Component({
  selector: 'zld-monster',
  standalone: true,
  imports: [ListComponent],
  template: `
    <p>monster work</p>
    <ng-container></ng-container>
  `,
  styles: ``,
})
export default class MonsterComponent {}
