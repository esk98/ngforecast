import { Component, OnInit } from '@angular/core';
import { DailyweatherService } from '../../shared/services/dailyweather.service';
import { StoreService } from '../../shared/services/store.service';
@Component({
  selector: 'app-dailyweather',
  templateUrl: './dailyweather.component.html',
  styleUrls: ['./dailyweather.component.scss']
})
export class DailyweatherComponent implements OnInit {

constructor(public _get: DailyweatherService, public _store: StoreService) { }

  ngOnInit() {
  }

}