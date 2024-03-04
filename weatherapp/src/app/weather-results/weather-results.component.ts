import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-results',
  templateUrl: './weather-results.component.html',
  styleUrls: ['./weather-results.component.css']
})
export class WeatherResultsComponent {
  locationInput?: string;

  constructor() {}

  sendLocation() {
    return(this.locationInput);
  }
}
