import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service'; //get the service inported
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss']
})
//constructors
export class WeatherPage {
  city: string = '';
  temperature: string = '';
  description: string = '';
  location: string = '';
  error: string = '';
//get the weather service call from the serivces.ts
  constructor(private weatherService: WeatherService) {}


  getWeather() {
    if (!this.city) return;
    //call the api using subscribe 
    this.weatherService.getWeather(this.city).subscribe({
      next: data => {
        this.temperature = (data.main.temp - 273.15).toFixed(2); //rounds the temprature value to the nearest value
        this.description = data.weather[0].description;
        this.location = data.name;
        this.error = '';
      },
      //if the city is not found throws an error
      error: err => {
        this.error = 'City not found or API error.';
        console.error(err);
      }
    });
  }
}