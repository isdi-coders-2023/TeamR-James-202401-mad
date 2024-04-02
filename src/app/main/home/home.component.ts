import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'zld-home',
  standalone: true,
  imports: [],
  template: `
    <div class="video">
      <iframe
        [src]="safeURL"
        width="280"
        height="157.5"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  `,
  styles: ``,
})
export class HomeComponent {
  videoUrl = 'https://www.youtube.com/embed/uHGShqcAHlQ?si=f-E1yBHb0-ilV-_J';
  safeURL: unknown;
  constructor(private _sanitizer: DomSanitizer) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(
      this.videoUrl,
    );
  }
}
