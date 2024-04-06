import { Component, OnInit } from '@angular/core';
import { StateService } from '../../core/state.service';
import { ZeldaItemsData } from '../../core/zelda-items-data';
import { CardComponent } from '../card/card.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'zld-list',
  standalone: true,
  imports: [CardComponent],
  template: `
    <div class="list-container">
      @for (item of zeldaItemsData?.data; track $index) {
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
  zeldaItemsData?: ZeldaItemsData;
  category: string = '';

  constructor(
    private state: StateService,
    private activeRoute: ActivatedRoute,
  ) {
    this.activeRoute.params.subscribe((p) => {
      this.category = p['category'];
      this.loadCard();
    });
  }

  ngOnInit(): void {
    this.state.getItems().subscribe({
      next: (data) => {
        this.zeldaItemsData = data;
        console.log(data);
      },
    });
  }

  loadCard() {
    this.state.loadItems(this.category);
  }
}
