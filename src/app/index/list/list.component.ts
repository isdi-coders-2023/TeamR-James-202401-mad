import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data-service.service';
import { StateService } from '../../core/state.service';
import { ItemsData, ZeldaItemsData } from '../../core/zelda-items-data';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'zld-list',
  standalone: true,
  imports: [CardComponent],
  template: `
    <ul>
      @for (item of cardData.data; track $index) {
        <li>
          <zld-card [zeldaInfo]="item"></zld-card>
        </li>
      }
    </ul>
  `,
  styles: `
    .zelda-list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      list-style: none;
      gap: 10px;
      padding: 10px;
    }
  `,
})
export default class ListComponent implements OnInit {
  zeldaItemData?: ZeldaItemsData;
  cardData!: { data: ItemsData[] };

  constructor(
    private serviceZelda: DataService,
    private state: StateService,
  ) {
    this.serviceZelda.getData('monsters').subscribe({
      next: (zeldaItem: ZeldaItemsData) => {
        this.state.setItems(zeldaItem.data);
      },
    });
    this.loadCard();
  }

  ngOnInit(): void {
    this.state.getItems().subscribe({
      next: (data) => {
        (this.zeldaItemData = data), console.log(this.zeldaItemData);
      },
    });
  }

  loadCard() {
    this.state.state$.subscribe((item) => (this.cardData = item));
  }
}
