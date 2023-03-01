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
  ) {}

  ngOnInit(): void {
    this.mainWeather = this.weatherService.getArrayOfWeathers()[0];
    this.weatherService.newArray.subscribe(()=>{
      this.mainWeather = this.weatherService.getArrayOfWeathers()[0];
    })
  }

  check() {
    this.weatherService.isActive.next(true);
    this.weatherService.idToChange.next(0);
  }
}
