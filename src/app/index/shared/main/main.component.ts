import { Component, OnInit } from '@angular/core';
import HomeComponent from '../../home/home.component';
import { DataService } from '../../../core/data-service.service';
import { ZeldaItemsData } from '../../../core/zelda-items-data';
import { StateService } from '../../../core/state.service';

@Component({
  selector: 'zld-main',
  standalone: true,
  imports: [HomeComponent],
  template: `
    <main class="main">
      <ng-content></ng-content>
    </main>
  `,
  styles: `
    .main {
      width: 100vw;
      height: 80vh;
      background-image: url('../../../../assets/background.png');
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
})
export class MainComponent implements OnInit {
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
  zeldaItemData?: ZeldaItemsData;
  ngOnInit(): void {
    this.state.getItems().subscribe({
      next: (data) => {
        (this.zeldaItemData = data), console.log(this.zeldaItemData);
      },
    });
  }
}
