import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
 selectedWeather:string = "sunny"

 changeWeather(weather:string):void{
  this.selectedWeather = weather
 }
}
