import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { ApiService } from './api.service';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class DailyweatherService {

  constructor(public _store: StoreService, public _api: ApiService) { this._store.params$.subscribe(
    params => {
      this.lon = params.lon,
      this.lat = params.lat
    }
  )}
  lon: number;
  lat: number;
  getDailyWeather() {
    this._api
      .getDailyWeather(this.lon, this.lat)
        .pipe(
          
        )
        .subscribe(response => console.log(response))
  }

}