import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  isActive = new Subject<boolean>();
  idToChange = new Subject<number>();
  newArray = new Subject<Weather[]>();

  private weathers: Weather[] = [
    { cityName: 'London', countryCode: 'EN', feelsLike: 30, temperature: 29 },
    { cityName: 'Paris', countryCode: 'FR', feelsLike: 30, temperature: 29 },
    { cityName: 'Tokyo', countryCode: 'JP', feelsLike: 30, temperature: 29 },
    { cityName: 'New York', countryCode: 'US', feelsLike: 30, temperature: 29 },
  ];

  constructor(private http: HttpClient) {
    this.newArray.subscribe((arr) => {
      this.weathers = arr;
    })
  }

  getArrayOfWeathers() {
    return this.weathers;
  }

  getSingleWeather(id: number) {
    return this.weathers[id];
  }

  getWeather(cityName: string) {
    return this.http.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=9cebb9d79b4e171e9d1341c2113e1970`
    );
  }
}
