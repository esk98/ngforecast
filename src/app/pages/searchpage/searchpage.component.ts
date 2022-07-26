import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shortWeather } from '../../shared/models/models';
import { ShortWeatherService } from '../../shared/services/shortweather.service';
@Component({
    selector: 'app-searchpage',
    templateUrl: './searchpage.component.html',
    styleUrls: ['./searchpage.component.scss'],
})
export class SearchpageComponent implements OnInit{
    shortWeather$!: Observable<shortWeather>;
    city$: BehaviorSubject<string> = new BehaviorSubject<string>('London');
    constructor(public ShortWeatherService: ShortWeatherService) {}

    ngOnInit(): void {
        this.onSearch('new york');
    }
    onSearch(city: string) {
        console.log(city)
        this.shortWeather$ = this.ShortWeatherService.getShortWeather(this.city$.getValue());
    }
}
