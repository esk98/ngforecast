import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, Observable } from 'rxjs';
import { AutoComplete } from '../../shared/services/autocomplete.service';
import { LocationService } from '../../shared/services/location.service';
import { DailyweatherService } from '../../shared/services/dailyweather.service';
@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    @Output() newSearchEvent = new EventEmitter<string>();
    inputFormControl = new FormControl<string>('');
    autoCompleteNames$!: Observable<string[]>;
    constructor(
        public _catchInputVal: AutoComplete,
        public _location: LocationService,
        public _get: DailyweatherService
    ) {}
    ngOnInit() {
        this.inputFormControl.valueChanges
            .pipe(
                filter(
                    (value: string | null) =>
                        value !== null && value?.length > 2
                ),
                distinctUntilChanged(),
                debounceTime(500)
            )
            .subscribe((value: any) => {
                this.autoCompleteNames$ =
                    this._catchInputVal.getAutoCompleteArray(value);
            });
    }
    setFindCity(input: any) {
        this.newSearchEvent.emit(input);
    }

    setLocationToStore(input: any) {
        this._location.getParams(input);
    }
}
