import { Component } from '@angular/core';
import { Weather } from './weather';
import { WeatherServiceService } from './weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  weathers: Weather[] = [];

  constructor(private weatherSerivce: WeatherServiceService) {
    this.weathers = weatherSerivce.getArrayOfWeathers();
  }
}
