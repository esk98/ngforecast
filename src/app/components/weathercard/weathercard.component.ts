import {
    Component,
    OnChanges,
    SimpleChanges,
    Input,
    OnDestroy,
} from '@angular/core';
import { ShortWeatherService } from '../../shared/services/shortweather.service';
import { CurrentWeather } from '../../shared/models/currentweather';
@Component({
    selector: 'app-weathercard',
    templateUrl: './weathercard.component.html',
    styleUrls: ['./weathercard.component.scss'],
})
export class WeathercardComponent implements OnChanges, OnDestroy {
    // to do: add eslint, remove logic from component to service
    weather!: CurrentWeather;
    subscription: any;
    @Input() city!: string;

    constructor(public _getData: ShortWeatherService) {
        this.subscription = this._getData.shortWeather$.subscribe(
            v => (this.weather = v)
        );
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (
            changes['city'].currentValue !== changes['city'].previousValue &&
            changes['city'].currentValue !== ''
        )
            this._getData.getShortWeather(changes['city'].currentValue);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
