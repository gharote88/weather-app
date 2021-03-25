import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { WeatherService } from '../weather.service';

import * as _ from 'lodash';


@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit, OnDestroy {
  city: string;
  today: string;
  sub: Subscription;
  forecasts:any;

  constructor(private  weatherService:WeatherService, private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((route: any) => {

      this.city = route.params.city;
      
      this.sub = this.weatherService.getForecast(this.city).subscribe((data: any) => {
        this.forecasts = _.filter(data.list,function(item){
          return item.dt_txt.includes('09:00:00');
        });
      });

    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
