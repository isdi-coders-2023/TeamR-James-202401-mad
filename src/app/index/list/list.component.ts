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
    <div class="list-container">
      @for (item of cardData.data; track $index) {
        <zld-card [zeldaInfo]="item" class="zelda-list"></zld-card>
      }
    </div>
  `,
  styles: `
    .list-container {
      display: flex;
      flex-direction: column;
      align-content: center;
      padding-block: 100px;
      margin: 0;
    }
    .zelda-list {
      z-index: 1;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;

      gap: 10px;
      padding: 20px;
      text-decoration: none;
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
        (this.zeldaItemData = data), console.log(data);
      },
    });
  }

  loadCard() {
    this.state.state$.subscribe((item) => (this.cardData = item));
  }
}
