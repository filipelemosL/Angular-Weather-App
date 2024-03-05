import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetWeatherDataService } from '../get-weather-data.service';

@Component({
  selector: 'app-weather-results',
  templateUrl: './weather-results.component.html',
  styleUrls: ['./weather-results.component.css']
})
export class WeatherResultsComponent {
  locationInput?: string;
  weatherData: any;

  constructor(private http: HttpClient, private weatherService: GetWeatherDataService) {}

  sendLocation() {
    if (this.locationInput) {
      const apiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(this.locationInput)}&apiKey=f7d4f2aaa37d4768822796f8f1cfbad5`;
      this.http.get(apiUrl).subscribe((data: any) => {
        if(data.features && data.features.length > 0) {
          const latitude = data.features[0].geometry.coordinates[1];
          const longitude = data.features[0].geometry.coordinates[0];
          const apiKey = '6081bb5300b107eb6739c3be12ea4a14';

          this.weatherService.getWeatherData(latitude, longitude, apiKey).subscribe(weatherData => {
            console.log(weatherData);
            this.weatherData = weatherData;
          });
        } else {
          console.log('Endereço não encontrado');
        }
      })
    }
  }
}
