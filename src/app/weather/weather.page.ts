import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
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

    this.weatherService.getWeather(this.city).subscribe({
      next: data => {
        this.temperature = (data.main.temp - 273.15).toFixed(2);
        this.description = data.weather[0].description;
        this.location = data.name;
        this.error = '';
      },
      error: err => {
        this.error = 'City not found or API error.';
        console.error(err);
      }
    });
  }
}