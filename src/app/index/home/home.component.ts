import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data-service.service';
import { StateService } from '../../core/state.service';
import { ZeldaItemsData } from '../../core/zelda-items-data';
@Component({
  selector: 'zld-home',
  standalone: true,
  imports: [],
  template: `
    <div class="video">
      <iframe
        src="https://www.youtube.com/embed/uHGShqcAHlQ?si=f-E1yBHb0-ilV-_J"
        width="280"
        height="157.5"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  `,
  styles: ``,
})
export default class HomeComponent implements OnInit {
  zeldaItemData?: ZeldaItemsData;
  constructor(
    private serviceZelda: DataService,
    private state: StateService,
  ) {
    this.serviceZelda.getData('monsters').subscribe({
      next: (zeldaItem: ZeldaItemsData) => {
        this.state.setItems(zeldaItem.data);
        console.log('set item:', zeldaItem.data);
      },
    });
  }
  ngOnInit(): void {
    this.state.getItems().subscribe({
      next: (data) => {
        (this.zeldaItemData = data), console.log('this.ngOnInit:', data);
      },
    });
  }
}
