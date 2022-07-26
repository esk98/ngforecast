import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../shared/services/location.service';
import { DailyweatherService } from '../../shared/services/dailyweather.service';
import { ShortWeatherService } from '../../shared/services/shortweather.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, switchMap } from 'rxjs';
@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
    constructor(
        public route: ActivatedRoute,
        public parameters: LocationService,
        public dailyWeather: DailyweatherService,
        public ShortWeatherService: ShortWeatherService
    ) {}
    dailyWeather$: any;
    shortWeather$: any;
    todayHighlights$: any;
    city$: BehaviorSubject<string> = new BehaviorSubject<string>('London');
    ngOnInit(): void {
        this.onSearch('london');
    }
    onSearch(city: string) {
        if (city !== this.city$.getValue()) {
            this.city$.next(city);
            this.dailyWeather$ = this.parameters.getParams(this.city$.getValue()).pipe(
                switchMap((params: any) => {
                    return this.dailyWeather.getDailyWeather(
                        params.lon,
                        params.lat
                    );
                })
            );
            this.shortWeather$ = this.ShortWeatherService.getShortWeather(this.city$.getValue());
        } else (
            console.log('input city')
        )
    }
}
