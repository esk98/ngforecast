import {
    Component,
    OnChanges,
    SimpleChanges,
    Input,
    OnDestroy,
} from '@angular/core';
import { StoreService } from '../../shared/services/store.service';
import { ShortWeatherService } from '../../shared/services/shortweather.service';
import { shortWeather } from '../../shared/models/models';
import { Subscription } from 'rxjs';
@Component({
    selector: 'app-weathercard',
    templateUrl: './weathercard.component.html',
    styleUrls: ['./weathercard.component.scss'],
})
export class WeathercardComponent implements OnChanges, OnDestroy {
    // to do: add eslint, remove logic from component to service
    weather!: shortWeather;
    subscription: any;
    @Input() city!: string;

<<<<<<< HEAD
    constructor(
        public _getData: ShortWeatherService,
        public _store: StoreService
<<<<<<< HEAD
    ) {
=======
    constructor(public _getData: ShortWeatherService, public _store: StoreService) {
>>>>>>> stackblitz
=======
    ) { 
>>>>>>> cad6ca9b93f23fbeda9f8f67fc3dd31c0d497cc6
        this.subscription = this._store.shortWeather$.subscribe(
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
