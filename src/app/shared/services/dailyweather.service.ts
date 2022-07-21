import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class DailyweatherService {

  constructor(public _store: StoreService, public _api: ApiService) { }
  
  getDailyWeather(lat: number, lon: number) { 
    
  }

}