import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../../shared/api.service';
@Injectable({
  providedIn: 'root',
})
export class InputCatchService {

  constructor(private _api: ApiService) { }
  getAutoCompleteArray(input: string) {
  }
  getInputValue(input: string) {
    console.log(input)
  }
}