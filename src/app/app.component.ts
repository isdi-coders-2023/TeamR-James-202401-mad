import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './index/shared/footer/footer.component';
import { HeaderComponent } from './index/shared/header/header.component';
import { MainComponent } from './index/shared/main/main.component';
import { NavbarComponent } from './index/navbar/navbar.component';
import FormComponent from './index/form/form.component';

@Component({
  selector: 'zld-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavbarComponent,
    FormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
