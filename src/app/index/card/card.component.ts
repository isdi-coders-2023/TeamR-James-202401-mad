import { Component, Input } from '@angular/core';
import { ItemsData } from '../../core/zelda-items-data';

@Component({
  selector: 'zld-card',
  standalone: true,
  imports: [],
  template: ` <div class="zelda-card">
    <img
      src="{{ zeldaInfo.image }}"
      alt="Zelda element illustration"
      tabindex="0"
    />
    <p>{{ zeldaInfo.name }}</p>
  </div>`,
  styles: `
    .zelda-card {
      background-color: black;
      opacity: 8;
      border-radius: 5px;
      box-shadow: 3px 4px #fdffe3;
      font-size: 1.5rem;
      text-transform: capitalize;
    }
  `,
})
export class CardComponent {
  @Input() zeldaInfo!: ItemsData;
}
