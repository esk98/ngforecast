import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, Observable, tap } from 'rxjs';
import { InputCatchService } from '../../shared/inputcatch.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() newSearchEvent = new EventEmitter<string>();
  inputFormControl = new FormControl<string>('');
  autoCompleteNames!: Observable<string[]>;
  constructor(public _catchInputVal: InputCatchService) { }
  ngOnInit() {
    this.inputFormControl.valueChanges.pipe(
      filter((value: string | null) => value !== null),
      distinctUntilChanged(),
      debounceTime(500),
    ).subscribe((value: any) => {
      this.autoCompleteNames = this._catchInputVal.getAutoCompleteArray(value);
    });
  }

  setFindCity(input: any) {
    this.newSearchEvent.emit(input)
  }
}
