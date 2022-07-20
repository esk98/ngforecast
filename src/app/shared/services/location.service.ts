import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShortWeatherService } from './shortweather.service';
import { ApiService } from './api.service';
import { StoreService } from './store.service';
export interface Params {
  lat: number;
  lon: number;
}
@Injectable({
  providedIn: 'root',
})
export class LocationService {

  constructor(private _store: StoreService, private _api: ApiService) {}
  
  params: BehaviorSubject<Params> = new BehaviorSubject<Params>({
    lat: 50,
    lon: 38
  })

  getParams() {
  }

}