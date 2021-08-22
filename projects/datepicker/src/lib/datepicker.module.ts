import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DatepickerComponent } from './datepicker.component';



@NgModule({
    declarations: [
        DatepickerComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DatepickerComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DatepickerModule { }
