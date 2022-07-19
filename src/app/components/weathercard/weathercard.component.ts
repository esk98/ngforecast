import {
  Component,
  OnChanges,
  SimpleChanges,
  Input,
  SimpleChange,
} from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from './weather.service';
@Component({
  selector: 'app-weathercard',
  templateUrl: './weathercard.component.html',
  styleUrls: ['./weathercard.component.scss'],
})
export class WeathercardComponent implements OnChanges {
  // to do: add eslint, remove logic from component to service
  $weatherData!: Observable<any>;
  @Input() city!: string;
  constructor(public _getData: WeatherService) {}
  ngOnChanges(changes: SimpleChanges) {
    if (!changes['city'].isFirstChange())
      this.$weatherData = this._getData.getWeatherFromApi(
        changes['city'].currentValue
      );
  }
}
