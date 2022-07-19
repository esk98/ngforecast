import {
  Component,
  OnChanges,
  SimpleChanges,
  Input,
  SimpleChange,
  OnDestroy,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { WeatherService } from './weather.service';
import { currentWeather } from '../../shared/models/currentWeather';
@Component({
  selector: 'app-weathercard',
  templateUrl: './weathercard.component.html',
  styleUrls: ['./weathercard.component.scss'],
})
export class WeathercardComponent implements OnChanges, OnDestroy {
  // to do: add eslint, remove logic from component to service
  weather!: currentWeather;
  subscription: any;
  @Input() city!: string;

  constructor(public _getData: WeatherService) {
    console.log('constructor');
    this.subscription = this._getData.weatherData$.subscribe(
      v => (this.weather = v)
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['city'].currentValue !== changes['city'].previousValue &&
      changes['city'].currentValue !== ''
    )
      this._getData.getWeatherFromApi(changes['city'].currentValue);
    console.log(changes);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
