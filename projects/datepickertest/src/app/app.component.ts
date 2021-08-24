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



        setTimeout(() => {
                let doc1 = document.getElementById('ionic.esm.js')
                console.log(doc1)
                document.body.removeChild(doc1);
                let doc2 = document.getElementById('ionic.js')
                console.log(doc2)
                document.body.removeChild(doc2);
                let doc3 = document.getElementById('ionic.bundle.css')
                console.log(doc3)
                document.head.removeChild(doc3);
        }, 2000);
    }
}
