import { Injectable } from '@angular/core';
import { Observable, map, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { StoreService } from './store.service';
import { LocationService } from './location.service';
import { shortWeather } from '../models/models';
import { dailyWeather } from '../models/models';
@Injectable()
export class WeatherService {

  constructor(private _api: ApiService, private params: LocationService, private _store: StoreService) { }

    getShortWeather(city: string): Observable<shortWeather> {
      return this._api.getWeather(city).pipe(
          map((response: any) => ({
              location: response.location.name,
              icon: response.current.condition.icon,
              condition: response.current.condition.text,
              temperature: response.current.temp_c,
              wind: response.current.wind_kph,
              humidity: response.current.humidity,
              feelslike: response.current.feelslike_c,
          }))
      );
    }

    getDailyWeather(lon: number, lat: number): Observable<dailyWeather> {
      return this._api.getDailyWeather(lon, lat).pipe(
              map((response: any) =>
                  response.daily.map((el: any) => ({
                      date: new Date(el.dt * 1000),
                      icon: el.weather[0].main.toLowerCase(),
                      temperature: el.temp.eve,
                  }))
              )
      );
    }

  //   this.parameters.getParams(city).pipe(
  //     switchMap((params: any) => {
  //         return this.WeatherService.getDailyWeather(
  //             params.lon,
  //             params.lat
  //         );
  //     })
  // );
}