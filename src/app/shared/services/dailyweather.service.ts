import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from './api.service';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class DailyweatherService {

  constructor(public _store: StoreService, public _api: ApiService) { }

  getDailyWeather() {
    this._api
      .getDailyWeather(this._store.params$.getValue().lon, this._store.params$.getValue().lat)
        .pipe(
          
        )
        .subscribe(response => console.log)
  }

}