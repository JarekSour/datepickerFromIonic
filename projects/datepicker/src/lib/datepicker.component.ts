import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatepickerService } from './datepicker.service';
import { BehaviorSubject } from 'rxjs';

export const dayNames = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
export const dayShortNames = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sab', 'Dom']
export const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
export const monthShortNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']

@Component({
    selector: 'lib-datepicker',
    templateUrl: './datepicker.component.html',
    styles: []
})
export class DatepickerComponent implements OnInit {

    @Input() cancelText: string
    @Input() location: 'es' | 'en'
    @Input() disabled: boolean
    @Input() displayFormat: string
    @Input() doneText: string
    @Input() max: string | undefined
    @Input() min: string | undefined
    @Input() mode: "ios" | "md"
    @Input() placeholder: string
    @Input() value: string

    @Input() dayNames: string[] | undefined
    @Input() dayShortNames: string[] | undefined
    @Input() monthNames: string[] | undefined
    @Input() monthShortNames: string[] | undefined

    @Input() name: string
    @Output() onChangeValue = new EventEmitter<{ name: string, value: string }>();

    constructor(public datepickerService: DatepickerService) {
        datepickerService.lazyLoadQuill()
    }

    ngOnInit(): void {
        this.initValues()
    }

    initValues() {
        this.location = this.location || 'en'
        this.disabled = false || this.disabled
        this.displayFormat = this.displayFormat || 'MMM D, YYYY'

        this.max = this.max || undefined
        this.min = this.min || undefined
        this.mode = this.mode || 'md'
        this.placeholder = this.placeholder || ''
        this.value = this.value || ''
        this.name = this.name || ''

        if (this.location == 'es') {

            this.cancelText = this.cancelText || 'CANCEL'
            this.doneText = this.doneText || 'DONE'
            this.dayNames = dayNames
            this.dayShortNames = dayShortNames
            this.monthNames = monthNames
            this.monthShortNames = monthShortNames
        }
    }

    onChange(e) {
        this.onChangeValue.emit({ name: this.name, value: e.target.value })
    }

}
