import { Component } from '@angular/core';
import { DailyweatherService } from '../../shared/services/dailyweather.service';
import { LocationService } from '../../shared/services/location.service';
@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
    constructor(
        public _get: DailyweatherService,
        public _location: LocationService
    ) {
        this._location.getParams('london');
        this._get.getDailyWeather();
    }
}
