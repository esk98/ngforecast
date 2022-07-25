import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { shortWeather } from '../../shared/models/models';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-weathercard',
    templateUrl: './weathercard.component.html',
    styleUrls: ['./weathercard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeathercardComponent {
    @Input() weather$!: Observable<shortWeather>;
    constructor() {}
}
