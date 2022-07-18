import { Component, OnInit, OnChanges, SimpleChanges, Input, SimpleChange } from '@angular/core';
import { WeatherService } from './weather.service';
@Component({
  selector: 'app-weathercard',
  templateUrl: './weathercard.component.html',
  styleUrls: ['./weathercard.component.scss']
})
export class WeathercardComponent implements OnInit, OnChanges {
  // to do: add eslint, remove logic from component to service
  @Input() city!: string;
  constructor(public _getData: WeatherService) { }
  ngOnChanges(changes: SimpleChanges) {
    if(!changes['city'].isFirstChange())
    this.getCityWeather(changes['city'].currentValue)
  }
  getCityWeather(city: string) {
    this._getData.getWeather(city).subscribe(data => {  console.log(data) });
  }

  ngOnInit() {
  }

}
