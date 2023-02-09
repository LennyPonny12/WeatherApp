import { Injectable } from '@angular/core';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  private weathers: Weather[] = [
    { cityName: 'London', countryCode: '0', feelsLike: 30, temperature: 29 },
    { cityName: 'London', countryCode: '1', feelsLike: 30, temperature: 29 },
    { cityName: 'London', countryCode: '2', feelsLike: 30, temperature: 29 },
    { cityName: 'London', countryCode: '3', feelsLike: 30, temperature: 29 },
  ];

  constructor() {}

  getArrayOfWeathers() {
    return this.weathers;
  }

  getSingleWeather(id: number) {
    return this.weathers[id];
  }
}
