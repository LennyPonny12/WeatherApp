import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideWeatherComponent } from './side-weather/side-weather.component';
import { MainWeatherComponent } from './main-weather/main-weather.component';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [AppComponent, SideWeatherComponent, MainWeatherComponent, InputComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
