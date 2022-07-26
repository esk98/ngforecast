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
    city!: string;
    constructor(public ShortWeatherService: ShortWeatherService) {}

    onSearch(city: string) {
        this.city = city;
        if (city) {
        this.shortWeather$ = this.ShortWeatherService.getShortWeather(city);
        console.log(this.shortWeather$);
        } else {
            console.log('Input city')
        }
    }
}
