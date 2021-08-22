import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatepickerModule } from 'datepicker';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        DatepickerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
