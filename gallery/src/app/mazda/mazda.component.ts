import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mazda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class MazdaComponent {
  title = 'Mazda';
  images: string[] = ["mazda0.png", "mazda1.png", "mazda2.png", "mazda3.png", "mazda4.png", "mazda5.png", "mazda6.png", "mazda7.png", "mazda8.png", "mazda9.png"];
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
