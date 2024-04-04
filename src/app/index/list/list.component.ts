import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../../core/data-service.service';
import { StateService } from '../../core/state.service';
import { ZeldaItemsData } from '../../core/zelda-items-data';

@Component({
  selector: 'zld-list',
  standalone: true,
  imports: [],
  template: ` <p>list works!</p> `,
  styles: ``,
})
export default class ListComponent implements OnInit {
  private serviceZelda = inject(DataService);
  private state = inject(StateService);
  zeldaItemData?: ZeldaItemsData;
  constructor() {
    this.serviceZelda.getData('monsters').subscribe({
      next: (zeldaItem: ZeldaItemsData) => {
        this.state.setItems(zeldaItem.data);
      },
    });
  }
  ngOnInit(): void {
    this.state.getItems().subscribe({
      next: (data) => {
        (this.zeldaItemData = data), console.log(this.zeldaItemData);
      },
    });
  }
}
