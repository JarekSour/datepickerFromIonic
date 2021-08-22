import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {

    @ViewChild('datepicker') datepicker;

    title = 'datepickertest';

    changeValue(e) {
        console.log(e)
    }
}
