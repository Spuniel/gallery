import { Component } from '@angular/core';
import { HeadComponent } from './head/head.component';
import { MazdaComponent } from './mazda/mazda.component';
import { BmwComponent } from './bmw/bmw.component';
import { MercedesComponent } from './mercedes/mercedes.component';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeadComponent,
    MazdaComponent,
    BmwComponent,
    MercedesComponent,
    NgIf,
    NgSwitch,
    NgSwitchCase
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCar = 'mazda';

  setCar(type: string) {
    this.selectedCar = type;
  }
}
