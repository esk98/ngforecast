import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { params } from '../models/models';
import { ApiService } from './api.service';
import { StoreService } from './store.service';
@Injectable({
  providedIn: 'root',
})
export class LocationService {

  constructor(private _store: StoreService, private _api: ApiService) {}
  
  getParams(city: string) {
    this._api.getLocationParams(city).pipe(
      map((response: any) => ({
          lat: response.location.lat,
          lon: response.location.lon   
        })
      )
    ).subscribe((params: params) => {
      this._store.params$.next(params);
    })
  };

}