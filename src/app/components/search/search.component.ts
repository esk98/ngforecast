import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { InputCatchService } from './inputcatch.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputFormControl = new FormControl<string>('');
  // autoCompleteNames: string [];
  constructor(private _catchInputVal: InputCatchService) { }

  ngOnInit() {
    // this.inputFormControl.valueChanges.pipe(
    //   filter((value: string) => {
    //     return value !== null && value.length > 3;
    //   }),
    //   distinctUntilChanged(),
    //   debounceTime(500)
    // ).subscribe((res: string) => this._catchInputVal.getInputValue(res))
  }

}
