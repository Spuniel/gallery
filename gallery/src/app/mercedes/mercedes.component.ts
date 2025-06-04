import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mercedes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class MercedesComponent {
  title = 'Mercedes';
  images: string[] = ["mercedes0.png", "mercedes1.png", "mercedes2.png", "mercedes3.png", "mercedes4.png", "mercedes5.png", "mercedes6.png", "mercedes7.png", "mercedes8.png", "mercedes9.png"];
  active = 1;

  get leftImage() {
    return this.images[(this.active - 1 + 10) % 10];
  }
  get middleImage() {
    return this.images[this.active];
  }
  get rightImage() {
    return this.images[(this.active + 1) % 10];
  }

  next() {
    this.active = (this.active + 1) % 10;
  }

  previous() {
    this.active = (this.active - 1 + 10) % 10;
  }
}
