import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { shortWeather } from '../../shared/models/models';
import { Observable, Subscription } from 'rxjs';
@Component({
    selector: 'app-weathercard',
    templateUrl: './weathercard.component.html',
    styleUrls: ['./weathercard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeathercardComponent implements OnInit, OnDestroy {
    weather!: shortWeather;
    subscription!: Subscription;
    @Input() shortWeather$!: Observable<shortWeather>;
    constructor() {}

    ngOnInit(): void {
        this.subscription = this.shortWeather$.subscribe(
            value => (this.weather = value)
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
