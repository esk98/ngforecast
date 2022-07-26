import { Component } from '@angular/core';
import { LocationService } from '../../shared/services/location.service';
import { DailyweatherService } from '../../shared/services/dailyweather.service';
import { ShortWeatherService } from '../../shared/services/shortweather.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
    constructor(
        public route: ActivatedRoute,
        public parameters: LocationService,
        public dailyWeather: DailyweatherService,
        public ShortWeatherService: ShortWeatherService
    ) {}
    dailyWeather$: any;
    shortWeather$: any;
    todayHighlights$: any;

    onSearch(city: string) {
        if (city) {
        console.log(this.route.snapshot.paramMap.get('city'));
        this.dailyWeather$ = this.parameters.getParams(city).pipe(
            switchMap((params: any) => {
                return this.dailyWeather.getDailyWeather(
                    params.lon,
                    params.lat
                );
            })
        );
        this.shortWeather$ = this.ShortWeatherService.getShortWeather(city);
        } else { 
            console.log('input city')
        }
    }
}
