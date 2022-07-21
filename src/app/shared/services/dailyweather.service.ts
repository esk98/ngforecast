import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ApiService } from './api.service';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class DailyweatherService {
  lon!: number;
  lat!: number;

  constructor(public _store: StoreService, public _api: ApiService) { 
    this._store.params$.subscribe(
      params => {
        this.lon = params.lon,
        this.lat = params.lat
      })
  }

  getDailyWeather() {
    this._api
      .getDailyWeather(this.lon, this.lat)
        .pipe(
          map((response) => ({
            date: response.daily.map(
              (element: any) => {
                return element['dt'];
              }
            ),
            icon: response.daily.map(
              (element: any) => {
                return element['weather'][0]['main']
              }
            ),
            temperature: response.daily.map(
              (element: any) => {
                return element['temp']['eve']
              }
            )
          }))
        )
        .subscribe(response => {console.log(response)})
  }

}