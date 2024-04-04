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
  styles: `
    :host {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      @media (width > 800px) {
        iframe {
          width: 560px;
          height: 315px;
        }
      }
    }
  `,
})
export default class HomeComponent {
  constructor() {}
}
