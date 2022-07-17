import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { response } from 'express';
import { debounceTime, distinctUntilChanged, filter, Observable, tap } from 'rxjs';
import { InputCatchService } from './inputcatch.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputFormControl = new FormControl<string>('');
  autoCompleteNames!: Observable<string[]>;
  constructor(private _catchInputVal: InputCatchService) { }

  ngOnInit() {
    this.inputFormControl.valueChanges.pipe(
      filter((value: string | null) => value !== null),
      distinctUntilChanged(),
      debounceTime(500),
    ).subscribe((value: any) => {
      this.autoCompleteNames = this._catchInputVal.getAutoCompleteArray(value);
    });
  }
}
