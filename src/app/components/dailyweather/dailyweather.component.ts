import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { DailyweatherService } from '../../shared/services/dailyweather.service';
import { StoreService } from '../../shared/services/store.service';
import { LocationService } from '../../shared/services/location.service';
@Component({
    selector: 'app-dailyweather',
    templateUrl: './dailyweather.component.html',
    styleUrls: ['./dailyweather.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailyweatherComponent {
    constructor() {}
    @Input() dailyWeather$: any;
}
