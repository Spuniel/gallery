import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mazdaImages: string[] = ["mazda0.png", "mazda1.png", "mazda2.png", "mazda3.png", "mazda4.png", "mazda5.png", "mazda6.png", "mazda7.png", "mazda8.png", "mazda9.png"];
  bmwImages: string[] = ["bmw0.png", "bmw1.png", "bmw2.png", "bmw3.png", "bmw4.png", "bmw5.png", "bmw6.png", "bmw7.png", "bmw8.png", "bmw9.png"];
  mercedesImages: string[] = ["mercedes0.png", "mercedes1.png", "mercedes2.png", "mercedes3.png", "mercedes4.png", "mercedes5.png", "mercedes6.png", "mercedes7.png", "mercedes8.png", "mercedes9.png"];

  auta: string[][] = [this.mazdaImages, this.bmwImages, this.mercedesImages];

  active: number =  1;
  carType: number = 0;
  carName: string = "Mazda";

  leftImage: string = this.auta[this.carType][this.getIndexBefore()];
  middleImage: string = this.auta[this.carType][this.active];
  rightImage: string = this.auta[this.carType][this.getIndexAfter()];

  next(){

    if(this.active + 1 > 9){
      this.active = 0;
    } else{
      this.active++;
    }
    this.reloadImages();
  }

  previous(){
    if(this.active - 1 < 0){
      this.active = 9;
    } else{
      this.active--;
    }
    this.reloadImages();
  }

  getIndexBefore(): number{
    if(this.active - 1 < 0){
      return 9;
    } else{
      return this.active - 1;
    }
  }

  getIndexAfter(): number{
    if(this.active + 1 > 9){
      return 0;
    } else{
      return this.active + 1;
    }
  }

  setToMazda(){
    this.carType = 0;
    this.carName = "Mazda";
    this.reloadImages();
  }

  setToMercedes(){
    this.carType = 2;
    this.carName = "Mercedes";
    this.reloadImages();
  }

  setToBmw(){
    this.carType = 1;
    this.carName = "BMW";
    this.reloadImages();
  }


  reloadImages(){
    this.leftImage = this.auta[this.carType][this.getIndexBefore()];
    this.middleImage = this.auta[this.carType][this.active];
    this.rightImage = this.auta[this.carType][this.getIndexAfter()];
  }

}
