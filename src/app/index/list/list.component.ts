import { Component, OnInit } from '@angular/core';
import { StateService } from '../../core/state.service';
import { ZeldaItemsData } from '../../core/zelda-items-data';
import { CardComponent } from '../card/card.component';
import { ActivatedRoute } from '@angular/router';
import { PageButtonComponent } from '../button/button.component';

@Component({
  selector: 'zld-list',
  standalone: true,
  template: `
    <zld-button label="Previous" (pageChange)="prevPage()"></zld-button>
    <div class="list-container">
      @for (item of getDisplayedItem(); track $index) {
        <zld-card [zeldaInfo]="item" class="zelda-list"></zld-card>
      }
    </div>
    <zld-button label="Next" (pageChange)="nextPage()"></zld-button>
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
  imports: [CardComponent, PageButtonComponent],
})
export default class ListComponent implements OnInit {
  zeldaItemsData?: ZeldaItemsData;
  category: string = '';
  itemForPage: number = 5;
  currentPage: number = 1;
  totalPage: number =
    (this.zeldaItemsData?.data.length || 0) / this.itemForPage;

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
        console.log(`total page:`, this.totalPages());
      },
    });
    this.loadCard();
  }

  loadCard() {
    this.state.loadItems(this.category);
  }
  getDisplayedItem() {
    const startIndex = (this.currentPage - 1) * this.itemForPage;
    const endIndex = startIndex + this.itemForPage;
    console.log('get display item:', this.totalPages());
    return this.zeldaItemsData?.data.slice(startIndex, endIndex) || [];
  }

  totalPages(): number {
    return Math.round(
      (this.zeldaItemsData?.data.length || 0) / this.itemForPage,
    );
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
