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
      <form [formGroup]="formdata" (ngSubmit)="handleSubmit()">
        <label for="">
          <input
            type="text"
            formControlName="name"
            placeholder="Insertar nombre"
            [(ngModel)]="inputText"
        /></label>

        <div class="alert" hidden>El nombre es obligatorio</div>

        <label for="">
          <input
            type="text"
            formControlName="location"
            placeholder="Localización"
            [(ngModel)]="inputText2"
        /></label>
        <label for="">
          <input
            type="text"
            formControlName="description"
            placeholder="Descripción"
            [(ngModel)]="inputText3"
        /></label>
        <label for=""
          ><input
            type="text"
            formControlName="drop"
            placeholder="Recompensa"
            [(ngModel)]="inputText4"
        /></label>

        <label for=""> <input type="submit" value="Create" /></label>
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
  formdata: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formdata = this.fb.group({
      name: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      drop: new FormControl('', Validators.required),
    });
  }
  inputText4 = '';
  inputText3 = '';
  inputText2 = '';
  inputText = '';
  handleSubmit() {
    console.log(this.formdata.value);
    this.inputText = '';
    this.inputText2 = '';
    this.inputText3 = '';
    this.inputText4 = '';
  }
}
