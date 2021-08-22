import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ReplaySubject, Observable, forkJoin } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DatepickerService {

    private _loadedLibraries: { [url: string]: ReplaySubject<any> } = {};

    constructor(@Inject(DOCUMENT) private readonly document: any) { }

    lazyLoadQuill(): Observable<any> {
        return forkJoin([
            this.loadScript('https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js', true),
            this.loadScript('https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js'),
            this.loadStyle('https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css')
        ]);
    }

    private loadScript(url: string, type: boolean = false): Observable<any> {
        if (this._loadedLibraries[url]) {
            return this._loadedLibraries[url].asObservable();
        }

        this._loadedLibraries[url] = new ReplaySubject();

        const script = this.document.createElement('script');
        script.type = 'text/javascript';
        script.type = type ? 'module' : 'text/javascript';
        script.async = true;
        script.src = url;
        script.onload = () => {
            this._loadedLibraries[url].next();
            this._loadedLibraries[url].complete();
        };

        this.document.body.appendChild(script);

        return this._loadedLibraries[url].asObservable();
    }

    private loadStyle(url: string): Observable<any> {
        if (this._loadedLibraries[url]) {
            return this._loadedLibraries[url].asObservable();
        }

        this._loadedLibraries[url] = new ReplaySubject();

        const style = this.document.createElement('link');
        style.type = 'text/css';
        style.href = url;
        style.rel = 'stylesheet';
        style.onload = () => {
            this._loadedLibraries[url].next();
            this._loadedLibraries[url].complete();
        };

        const head = document.getElementsByTagName('head')[0];
        head.appendChild(style);

        return this._loadedLibraries[url].asObservable();
    }
}
