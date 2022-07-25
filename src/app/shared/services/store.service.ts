import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
<<<<<<< HEAD
import {
    shortWeather,
    dailyWeather,
    todayHighlights,
    params,
} from '../models/models';
@Injectable({ providedIn: 'root' })
=======
import { 
  shortWeather, 
  dailyWeather, 
  todayHighlights,
  params
} from '../models/models';
@Injectable({providedIn: 'root'})
>>>>>>> stackblitz
export class StoreService {
    constructor() {}

<<<<<<< HEAD
    city$: BehaviorSubject<string> = new BehaviorSubject<string>('London');

    shortWeather$: BehaviorSubject<shortWeather> =
        new BehaviorSubject<shortWeather>({
            location: 'London',
            icon: 'assets/clouds.svg',
            condition: 'Sunny',
            temperature: 18,
            wind: 2,
            humidity: 3,
            feelslike: 23,
        });

    dailyWeather$: BehaviorSubject<Object[]> = new BehaviorSubject<Object[]>([
        {},
    ]);

    todayHighlights$: BehaviorSubject<todayHighlights> =
        new BehaviorSubject<todayHighlights>({
            pressure: 18,
            clouds: 19,
            uvi: 2,
            sunrise: 19,
            sunset: 0.2,
            visibility: 15,
            dewPoint: 34,
        });

    params$: BehaviorSubject<params> = new BehaviorSubject<params>({
        lat: 50,
        lon: 33,
    });
}
=======
  constructor() { }

  city$: BehaviorSubject<string> = new BehaviorSubject<string>('London');

  shortWeather$: BehaviorSubject<shortWeather> = new BehaviorSubject<shortWeather>({
    location: 'London',
    icon: 'assets/a-cloudy.svg',
    condition: 'Sunny',
    temperature: 18,
    wind: 2,
    humidity: 3,
    feelslike: 23,
  });

  dailyWeather$: BehaviorSubject<dailyWeather> = new BehaviorSubject<dailyWeather>({
    data: [123012301, 10123123, 1231231, 12312312],
    icon: ['assets/day.svg', 'assets/a-cloudy.svg', 'assets/day.svg', 'assets/a-cloudy.svg'],
    temperature: [18, 23, 43, 53]
  });

  todayHighlights$: BehaviorSubject<todayHighlights> = new BehaviorSubject<todayHighlights>({
    pressure: 18,
    clouds: 19,
    uvi: 2,
    sunrise: 19,
    sunset: 0.2,
    visibility: 15,
    dewPoint: 34
  });
  
  params$: BehaviorSubject<params> = new BehaviorSubject<params>({
    lat: 50,
    lon: 33
  });
}
>>>>>>> stackblitz
