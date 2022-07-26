import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shortWeather } from '../../shared/models/models';
import { ShortWeatherService } from '../../shared/services/shortweather.service';
@Component({
    selector: 'app-searchpage',
    templateUrl: './searchpage.component.html',
    styleUrls: ['./searchpage.component.scss'],
})
export class SearchpageComponent {
    shortWeather$!: Observable<shortWeather>;
    city$: BehaviorSubject<string> = new BehaviorSubject<string>('London');
    constructor(public ShortWeatherService: ShortWeatherService) {}

    onSearch(city: string) {
        if (!city) {
            console.log('Input city')
        } else {
            this.shortWeather$ = this.ShortWeatherService.getShortWeather(city);
        };
    }
}
