import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { StoreService } from './store.service';
import { params } from '../models/models';
@Injectable({
  providedIn: 'root'
})
export class DailyweatherService {

  constructor(public _store: StoreService, public _api: ApiService) { this.params = this._store.params$.getValue()}
  params: params;
  getDailyWeather() { 
    console.log('test')
    console.log(this.params.lat, this.params.lon )
  }

}