import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { DailyweatherService } from '../../shared/services/dailyweather.service';
import { LocationService } from '../../shared/services/location.service'; 
>>>>>>> stackblitz
@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
    constructor(public _get: DailyweatherService, public _location: LocationService) {
        this._location.getParams('Krasnoyarsk');
        this._get.getDailyWeather()
    }
}
