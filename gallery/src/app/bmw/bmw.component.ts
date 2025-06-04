import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bmw',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class BmwComponent {
  title = 'BMW';
  images: string[] = ["bmw0.png", "bmw1.png", "bmw2.png", "bmw3.png", "bmw4.png", "bmw5.png", "bmw6.png", "bmw7.png", "bmw8.png", "bmw9.png"];
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
