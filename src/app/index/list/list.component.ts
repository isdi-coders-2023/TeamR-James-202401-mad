import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data-service.service';
import { StateService } from '../../core/state.service';
import { ZeldaItemsData } from '../../core/zelda-items-data';

@Component({
  selector: 'zld-list',
  standalone: true,
  imports: [],
  template: `
    <!--   <div class="main">
      @for (item of pokemonList; track item.id) {
        <app-card []="item" />
      }
    </div> -->
  `,
  styles: ``,
})
export default class ListComponent implements OnInit {
  zeldaItemData?: ZeldaItemsData;
  constructor(
    private serviceZelda: DataService,
    private state: StateService,
  ) {
    this.serviceZelda.getData('monsters').subscribe({
      next: (zeldaItem: ZeldaItemsData) => {
        this.state.setItems(zeldaItem.data);
      },
    });
  }
  ngOnInit(): void {
    this.state.getItems().subscribe({
      next: (data) => {
        (this.zeldaItemData = data), console.log(data);
      },
    });
  }
}
