import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './main/shared/header/header.component';
import { MainComponent } from './main/main/main.component';
import { GetDataComponent } from './core/get-data/get-data.component';

@Component({
  selector: 'zld-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    GetDataComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ZeldaAngular17';
}
