import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = 'b63fae70a0766d821d609afa3b03f31a';
   // API key
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  //get the URL

  constructor(private http: HttpClient) {}

  //method to get the read the data and put it along with the key
  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}