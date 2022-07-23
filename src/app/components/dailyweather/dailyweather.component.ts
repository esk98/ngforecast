import { Component, OnInit } from '@angular/core';
import { DailyweatherService } from '../../shared/services/dailyweather.service';
import { StoreService } from '../../shared/services/store.service';
import { LocationService } from '../../shared/services/location.service';
@Component({
    selector: 'app-dailyweather',
    templateUrl: './dailyweather.component.html',
    styleUrls: ['./dailyweather.component.scss'],
})
export class DailyweatherComponent {
    constructor(
        public _get: DailyweatherService,
        public _store: StoreService,
        public _location: LocationService
    ) {
        this._get.getDailyWeather();
        this._store.dailyWeather$.subscribe(res => (this.dailyWeather = res));
    }
    dailyWeather: any;
}
