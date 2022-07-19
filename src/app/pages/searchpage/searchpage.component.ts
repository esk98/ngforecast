import { Component } from '@angular/core';

@Component({
    selector: 'app-searchpage',
    templateUrl: './searchpage.component.html',
    styleUrls: ['./searchpage.component.scss'],
})
export class SearchpageComponent {
    value!: string;
    constructor() {}

    addValue(newValue: string) {
        this.value = newValue;
    }
}
