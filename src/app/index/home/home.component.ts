import { Component } from '@angular/core';

@Component({
  selector: 'zld-home',
  standalone: true,
  imports: [],
  template: `
    <div class="video">
      <iframe
        src="https://www.youtube.com/embed/uHGShqcAHlQ?si=f-E1yBHb0-ilV-_J"
        width="280"
        height="157.5"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  `,
  styles: ``,
})
export default class HomeComponent {}
