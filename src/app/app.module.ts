import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideWeatherComponent } from './side-weather/side-weather.component';
import { MainWeatherComponent } from './main-weather/main-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    SideWeatherComponent,
    MainWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
