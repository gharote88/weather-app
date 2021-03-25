import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { from, Observable, of, Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weatherUrl: string = 'http://api.openweathermap.org/data/2.5/weather';  // URL to web api
  private weatherDetailUrl: string = 'http://api.openweathermap.org/data/2.5/forecast'; 
  private apiKey: string = '17d43d13e700d6ddc477d1cd9c5b3b55';
  private units: string = 'metric';

  constructor(private http: HttpClient) { }

  /** GET current weather from the server */
  getCurrentWeather(cities: string[]):any {
    let requests=[];
    cities.forEach((city) => {
      let params = new HttpParams().set("q", city).set("appid", this.apiKey).set("units", this.units);
      requests.push(this.http.get(this.weatherUrl, { params }))
    });
    return forkJoin(requests);
  }

  getForecast(city: string): Observable<any>  {
    let params = new HttpParams().set("q", city).set("appid", this.apiKey).set("units", this.units).set("cnt",'40');
    return this.http.get(this.weatherDetailUrl, { params });
  }

  
}
