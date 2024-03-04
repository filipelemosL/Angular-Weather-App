import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherResultsComponent } from './weather-results/weather-results.component';

const routes: Routes = [
  { path: 'weather-results', component: WeatherResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
