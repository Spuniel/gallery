import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-head',
  standalone: true,
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
  @Output() carSelected = new EventEmitter<string>();

  selectCar(car: string) {
    this.carSelected.emit(car);
  }
}
