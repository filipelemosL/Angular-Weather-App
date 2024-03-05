import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetWeatherDataService {

  constructor(private http: HttpClient) { }

  getWeatherData(latitude: number, longitude: number, apiKey: string): Observable<any> {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    return this.http.get(apiUrl);
  }
}
