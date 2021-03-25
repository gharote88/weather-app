import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy {

  cities:string[] = [ "Berlin", "Bucharest", "Madrid", "Paris", "Rome"];

  currentWeather: any[];
  
  sub:Subscription;
  
  constructor(private  weatherService:WeatherService) { }

  ngOnInit(): void {
    (this.sub = this.weatherService.getCurrentWeather(this.cities)).pipe().subscribe((res)=> this.currentWeather = res);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
