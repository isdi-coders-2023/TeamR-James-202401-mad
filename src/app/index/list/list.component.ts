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
      @for (item of getDisplayedItem(); track $index) {
        <zld-card [zeldaInfo]="item" class="zelda-list"></zld-card>
      }
    </div>
  `,
  styles: `
    .list-container {
      display: flex;
      flex-direction: column;
      @media (width > 800px) {
        flex-direction: row;
      }
    }
    .zelda-list {
      z-index: 1;
      display: flex;
      justify-content: center;
      gap: 10px;
      padding: 20px;
      text-decoration: none;
    }
  `,
})
export default class ListComponent implements OnInit {
  zeldaItemsData?: ZeldaItemsData;
  category: string = '';
  itemForPage: number = 5;
  currentPage: number = 2;

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
  getDisplayedItem() {
    const startIndex = (this.currentPage - 1) * this.itemForPage;
    const endIndex = startIndex + this.itemForPage;
    console.log(this.totalPages());
    return this.zeldaItemsData?.data.slice(startIndex, endIndex) || [];
  }

  totalPages(): number {
    return Math.ceil(
      (this.zeldaItemsData?.data.length || 0) / this.itemForPage,
    );
  }
}
