import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'zld-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="form">
      <article class="imgform">
        <img src="../assets/logozeldacreate.svg" alt="logozelda" />
        <p>ORIGINATE</p>
        <p>A NEW</p>
        <p>CREATURE</p>
      </article>
      <form [formGroup]="formData" (ngSubmit)="handleSubmit()">
        <label for="">
          <input
            type="text"
            formControlName="name"
            placeholder="Insertar nombre"
        /></label>

        <div class="alert" hidden>El nombre es obligatorio</div>

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

        <label for="">
          <button type="submit" [disabled]="!formData.valid">
            Create
          </button></label
        >
      </form>
    </div>
  `,
  styles: `
    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 40px;
      background-image: url('../../../assets/wallpaperform.svg');
      border: 1px solid #000000;
      box-shadow: 0px 0px 5px 5px rgb(45, 64, 96);
      border-radius: 20px;
      background-size: cover;
    }
    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 40px;
      background-image: url('../../../assets/wallpaperzeldaform3.svg');
      padding-block: 2rem;
      border: 1px solid #000000;
      box-shadow: 0px 0px 5px 5px rgb(45, 64, 96);
      border-radius: 20px;
      background-size: cover;
    }

    .imgform {
      text-align: center;
      margin-bottom: 20px;
      color: white;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    label {
      margin-bottom: 10px;
    }
  `,
})
export default class FormComponent {
  formData: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formData = this.fb.group({
      name: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      drop: new FormControl('', Validators.required),
    });
  }

  handleSubmit() {
    this.formData.reset();
  }
}
