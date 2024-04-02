import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';
import { ItemsData } from '../zelda-items-data';

@Component({
  selector: 'zld-get-data',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``,
})
export class GetDataComponent implements OnInit {
  constructor(private serviceZelda: DataService) {}
  zeldaItemData?: ItemsData;
  ngOnInit(): void {
    this.serviceZelda.getData().subscribe({
      next: (zeldaItem: ItemsData | undefined) => {
        console.log(zeldaItem);
        this.zeldaItemData = zeldaItem;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
