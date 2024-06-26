import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemsData } from '../../core/zelda-items-data';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'zld-card',
  standalone: true,
  imports: [RouterModule],
  template: ` <div
    class="card"
    (click)="handleClick()"
    tabindex="0"
    (keyup)="handleClick()"
  >
    @if (isImageDefined()) {
      <img
        src="{{ zeldaInfo.image }}"
        alt="Zelda element illustration"
        tabindex="0"
        height="100px"
      />
      <p class="card-name">{{ zeldaInfo.name }}</p>
    } @else {
      <p>No image available</p>
    }
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
  @Output() cardClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor(private router: Router) {}

  isImageDefined(): boolean {
    return this.zeldaInfo && this.zeldaInfo.image !== undefined;
  }
  handleClick() {
    this.cardClicked.emit(this.zeldaInfo.id);
    this.router.navigate([`/details/${this.zeldaInfo.id}`]);
  }
}
