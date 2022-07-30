import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
