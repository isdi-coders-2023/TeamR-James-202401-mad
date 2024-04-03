import { Component, inject } from '@angular/core';
import { DataService } from '../../core/data-service.service';


@Component({
  selector: 'zld-list',
  standalone: true,
  imports: [],
  template: ` <p>list works!</p> `,
  styles: ``,
})
export default class ListComponent  {
  public service = inject(DataService);



}
