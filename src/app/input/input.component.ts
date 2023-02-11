import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { WeatherServiceService } from '../weather-service.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit{
  active:boolean = false;
  idToChange:number;
  cityName:string;
  wrongCity:boolean = false

  constructor(private weatherService:WeatherServiceService,private http:HttpClient){}

  ngOnInit(){
    this.weatherService.isActive.subscribe((bool) => {
      this.active = bool
    })
    this.weatherService.idToChange.subscribe((index) => {
      this.idToChange = index
    })
  }

  changeCity(){
    this.weatherService.getWeather(this.cityName).subscribe((data:Array<any>)=> {
      this.wrongCity = false
      if(data.length > 0){
        let nameOfCity = data[0].name;
        this.http
        .get<any>(
          `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=9cebb9d79b4e171e9d1341c2113e1970&units=metric&lang=en`
          ).subscribe(dataOfCity => {
            let newWeather:Weather = {
              cityName: nameOfCity,
              countryCode: dataOfCity.sys.country,
              feelsLike: dataOfCity.main.feels_like,
              temperature: dataOfCity.main.temp
            }
            let newWeatherArray = this.weatherService.getArrayOfWeathers().slice()
            newWeatherArray[this.idToChange] = newWeather
            this.weatherService.newArray.next(newWeatherArray)
          })
          this.active = false
        }else{
          this.wrongCity = true
        }
      })
      this.cityName = ''
    }
}
