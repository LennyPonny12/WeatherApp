import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { WeatherServiceService } from '../weather-service.service';

@Component({
  selector: 'app-side-weather',
  templateUrl: './side-weather.component.html',
  styleUrls: ['./side-weather.component.scss'],
})
export class SideWeatherComponent implements OnInit {
  @Input() index: number;
  weather: Weather;

  constructor(private weatherService: WeatherServiceService) {}

  ngOnInit(): void {
    this.weather = this.weatherService.getSingleWeather(this.index);
  }

  changeWeatherSub(){
    this.weatherService.idToChange.next(this.index);
    this.weatherService.isActive.next(true)
  }
}
