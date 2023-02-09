import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { WeatherServiceService } from '../weather-service.service';

@Component({
  selector: 'app-main-weather',
  templateUrl: './main-weather.component.html',
  styleUrls: ['./main-weather.component.scss'],
})
export class MainWeatherComponent implements OnInit {
  mainWeather: Weather;

  constructor(
    private weatherService: WeatherServiceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.mainWeather = this.weatherService.getArrayOfWeathers()[0];
  }

  check(cityName: string) {
    this.weatherService.getWeather(cityName).subscribe((data) => {
      this.http
        .get<any>(
          `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=9cebb9d79b4e171e9d1341c2113e1970&units=metric`
        )
        .subscribe((dataOfCity) => {
          this.mainWeather.cityName = dataOfCity.name;
          this.mainWeather.countryCode = dataOfCity.sys.country;
          this.mainWeather.feelsLike = dataOfCity.main.temp;
          this.mainWeather.temperature = dataOfCity.main.feels_like;
        });
    });
  }
}
