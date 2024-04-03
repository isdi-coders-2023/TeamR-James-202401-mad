import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../../core/data-service.service';
import { ItemsData } from '../../core/zelda-items-data';

@Component({
  selector: 'zld-list',
  standalone: true,
  imports: [],
  template: ` <p>list works!</p> `,
  styles: ``,
})
export default class ListComponent implements OnInit {
  public service = inject(DataService);
  monster!: ItemsData;

  ngOnInit(): void {
    this.service.getData().subscribe(() => {
      (monster: never) => (this.monster = monster);
    });
    console.log(this.monster);
  }
}
