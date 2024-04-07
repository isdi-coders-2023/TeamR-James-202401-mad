import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../core/server/server.service';
import { ItemsData } from '../../core/zelda-items-data';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'zld-favorite',
  standalone: true,
  imports: [RouterModule],
  template: `
    @for (item of favoriteList; track $index) {
      <div>
        <button (click)="deleteFavorite(item.id)">Remove</button>
        <img src="{{ item.image }}" alt="zelda element illustration" />
        <p>
          {{ item.name }}
        </p>
      </div>
    }
  `,
  styles: ``,
})
export default class FavoriteComponent implements OnInit {
  favoriteList: ItemsData[] = [];
  subscription!: Subscription;
  itemCard!: ItemsData;
  constructor(private service: ServerService) {}

  ngOnInit() {
    this.subscription = this.service.getFavorite().subscribe((data) => {
      this.favoriteList = data;
      console.log(data);
    });
  }

  deleteFavorite(id: number) {
    this.service.deleteFavorite(id);
    this.favoriteList = this.favoriteList.filter((item) => item.id !== id);
  }
}
/* filter((item) => item.id !== id) */
