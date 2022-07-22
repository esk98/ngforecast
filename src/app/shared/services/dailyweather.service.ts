import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ApiService } from './api.service';
import { StoreService } from './store.service';
import { dailyWeather } from '../models/models';
@Injectable({
    providedIn: 'root',
})
export class DailyweatherService {
    lon!: number;
    lat!: number;

    constructor(public _store: StoreService, public _api: ApiService) {
        this._store.params$.subscribe(params => {
            (this.lon = params.lon), (this.lat = params.lat);
        });
    }

    getDailyWeather() {
        this._api
            .getDailyWeather(this.lon, this.lat)
            .pipe(
                tap(res => console.log(res)),
                map((response: any) => ({
                    date: response.daily.map((element: any) => {
                        return new Date(
                            element['dt'] * 1000
                        ).toLocaleDateString('ru-RU');
                    }),
                    icon: response.daily.map((element: any) => {
                        return element['weather'][0]['main'].toLowerCase();
                    }),
                    temperature: response.daily.map((element: any) => {
                        return element['temp']['eve'];
                    }),
                }))
            )
            .subscribe((response: dailyWeather) => {
                console.log(response);
                this._store.dailyWeather$.next(response);
            });
    }
}
