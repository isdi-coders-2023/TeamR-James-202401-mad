import { Component, Input } from '@angular/core';
import { ItemsData } from '../../core/zelda-items-data';

@Component({
  selector: 'zld-card',
  standalone: true,
  imports: [],
  template: ` <div class="card">
    <img
      src="{{ zeldaInfo.image }}"
      alt="Zelda element illustration"
      tabindex="0"
      height="100px"
    />
    <p class="card-name">{{ zeldaInfo.name }}</p>
  </div>`,
  styles: `
    .card {
      height: 200px;
      width: 145px;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      gap: 0.8rem;

      flex-wrap: wrap;
      padding: 1rem;

      background-color: black;
      opacity: 0.8;
      border-radius: 5px;
      box-shadow: 3px 4px #596e53;
      font-size: 1.5rem;
      text-transform: capitalize;
    }
    .card-name {
      color: white;
    }
  `,
})
export class CardComponent {
  @Input() zeldaInfo!: ItemsData;
}
