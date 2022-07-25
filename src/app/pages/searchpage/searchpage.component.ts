import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { shortWeather } from '../../shared/models/models';
import { ShortWeatherService } from '../../shared/services/shortweather.service';
@Component({
    selector: 'app-searchpage',
    templateUrl: './searchpage.component.html',
    styleUrls: ['./searchpage.component.scss'],
})
export class SearchpageComponent {
    shortWeather$!: Observable<shortWeather>;
    constructor(public ShortWeatherService: ShortWeatherService) {}

    onSearch(city: string) {
        this.shortWeather$ = this.ShortWeatherService.getShortWeather(city);
    }
}
