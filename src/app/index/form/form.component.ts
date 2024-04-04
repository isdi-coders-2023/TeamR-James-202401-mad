import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'zld-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div>
      <article>
        <img src="../assets/logozeldacreate.svg" alt="logozelda" />
        <p>ORIGINATE</p>
        <p>A NEW</p>
        <p>CREATURE</p>
      </article>
      <form [formGroup]="formdata">
        <label for="">
          <input
            type="text"
            formControlName="name"
            placeholder="Insertar nombre"
        /></label>
        <!-- <div class="alert">El nombre es obligatorio</div> -->
        <label for="">
          <input
            type="text"
            formControlName="location"
            placeholder="Localización"
        /></label>
        <label for="">
          <input
            type="text"
            formControlName="description"
            placeholder="Descripción"
        /></label>
        <label for=""
          ><input type="text" formControlName="drop" placeholder="Recompensa"
        /></label>
        <label for=""><input type="file" /></label>

        <label for=""> <input type="submit" value="Create" /></label>
      </form>
    </div>
  `,
  styles: ``,
})
export default class FormComponent {
  formdata: FormGroup;
  constructor() {
    this.formdata = new FormGroup({
      name: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      drop: new FormControl('', Validators.required),
    });
  }
}
