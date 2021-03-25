import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherComponent } from './weather/weather.component';
import { WeatherDetailsComponent } from './weather/weather-details/weather-details.component';


const routes: Routes = [
  { path:  "", pathMatch:  "full",redirectTo:  "weather" },
  { path: "weather", component: WeatherComponent },
  { path: "weather-details/:city", component: WeatherDetailsComponent }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
