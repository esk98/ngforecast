import { Injectable, Input } from '@angular/core';
import { Observable, map, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { StoreService } from './store.service';
import { CurrentWeather } from '../models/currentWeather';
@Injectable({
    providedIn: 'root',
})
export class ShortWeatherService {
    constructor(private _api: ApiService) {
        this.shortWeather$.subscribe(res => { 
            this.city$.next(res.location)
            console.log(this.city$)
        })
    }
    
city$: BehaviorSubject<string> = new BehaviorSubject<string>('London');

shortWeather$: BehaviorSubject<currentWeather> =
        new BehaviorSubject<currentWeather>({
            location: 'London',
            condition: {
                icon: 'assets/a-cloudy.svg',
                text: 'Sunny',
                code: 1002,
            },
            temperature: 18,
            wind: 2,
            humidity: 3,
            isDay: false,
            feelslike: 23,
            uv: 1,
        });

    getShortWeather(city: string) {
        this._api
            .getWeather(city)
            .pipe(
                map((response: any) => ({
                    location: response.location.name,
                    condition: {
                        icon: response.current.condition.icon,
                        text: response.current.condition.text,
                        code: response.current.condition.code,
                    },
                    temperature: response.current.temp_c,
                    wind: response.current.wind_kph,
                    humidity: response.current.humidity,
                    isDay: response.current.is_day,
                    feelslike: response.current.feelslike_c,
                    uv: response.current.uv,
                }))
            )
            .subscribe((response: currentWeather) => {
                this.shortWeather$.next(response);
            });
    }
}
