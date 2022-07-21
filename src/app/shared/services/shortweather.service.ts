import { Injectable, Input } from '@angular/core';
import { Observable, map, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { StoreService } from './store.service';
import { shortWeather } from '../models/models';
@Injectable({
    providedIn: 'root',
})
export class ShortWeatherService {
    constructor(private _api: ApiService, private _store: StoreService) {}
    
    getShortWeather(city: string) {
        this._api
            .getWeather(city)
            .pipe(
                map((response: any) => ({
                    location: response.location.name,
                    icon: response.current.condition.icon,
                    condition: response.current.condition.text,
                    temperature: response.current.temp_c,
                    wind: response.current.wind_kph,
                    humidity: response.current.humidity,
                    feelslike: response.current.feelslike_c,
                }))
            )
            .subscribe((response: shortWeather) => {
                this._store.shortWeather$.next(response);
            });
    }
}
