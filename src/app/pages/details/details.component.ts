import { Component } from '@angular/core';
import { DailyweatherService } from '../../shared/services/dailyweather.service';
@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
    constructor(public test: DailyweatherService) {
        this.test.getDailyWeather()
    }
}
