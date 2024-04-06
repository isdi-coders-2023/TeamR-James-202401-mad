import { Component, OnInit } from '@angular/core';
import ListComponent from '../list/list.component';
import { ItemsData } from '../../core/zelda-items-data';
import { StateService } from '../../core/state.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'zld-details',
  standalone: true,
  imports: [ListComponent],
  template: `
    <div class="details-container">
      @if (zeldaDetails) {
        <div class="details">
          <h2>{{ zeldaDetails.name }}</h2>
          <img
            src="{{ zeldaDetails.image }}"
            alt="zelda item illustration"
            width="150px"
          />
          <p>{{ zeldaDetails.name }}</p>
          <p>{{ zeldaDetails.description }}</p>
        </div>
      }
    </div>
  `,
  styles: `
    .details-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .details {
      width: 70vw;
      height: 70vh;

      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;

      padding: 1rem;

      background-color: black;
      opacity: 0.8;
      border-radius: 5px;
      box-shadow: 3px 4px #596e53;
      font-size: 1.5rem;
      text-transform: capitalize;
      color: white;
    }
    .details-name {
    }
  `,
})
export default class DetailsComponent implements OnInit {
  zeldaDetails: ItemsData | undefined;

  constructor(
    private state: StateService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.getDetails(id);
    });
    console.log('detail', this.zeldaDetails);
  }

  getDetails(id: number) {
    this.state.getItems().subscribe((response) => {
      this.zeldaDetails = response.data.find((item) => item.id === id);
    });
  }
}
