import { Injectable, Input } from '@angular/core';
import { Observable, map, BehaviorSubject } from 'rxjs';
import { ApiService } from '../../shared/api.service';
import { currentWeather } from '../../shared/models/currentWeather';
@Injectable({
    providedIn: 'root',
})
export class WeatherService {
    constructor(private _api: ApiService) {
        console.log(this.weatherData$);
    }
    city$: BehaviorSubject<string> = new BehaviorSubject<string>('London');
    weatherData$: BehaviorSubject<currentWeather> =
        new BehaviorSubject<currentWeather>({
            location: 'London',
            condition: {
                icon: '',
                text: 'Sunny',
            },
            temperature: 18,
            wind: 2,
            humidity: 3,
            isDay: false,
            feelslike: 23,
            uv: 1,
        });

    getWeatherFromApi(city: string) {
        this._api
            .getWeather(city)
            .pipe(
                map((response: any) => ({
                    location: response.location.name,
                    condition: {
                        icon: response.current.condition.icon,
                        text: response.current.condition.text,
                    },
                    temperature: response.current.temp_c,
                    wind: response.current.wind_kph,
                    humidity: response.current.humidity,
                    isDay: response.current.is_day,
                    feelslike: response.current.feelslike_c,
                    uv: response.current.uv,
                }))
            )
            .subscribe((response: any) => {
                this.weatherData$.next(response);
            });
    }
}
