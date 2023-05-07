import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class BackendService {
    base_url: string = 'http://localhost:3000/';

    constructor() { }

    postWithParams(url: string, params: any): Observable<Response> {
        return new Observable((observer: Observer<Response>) => {
            fetch(this.base_url + url, {
                method: 'POST',
                body: JSON.stringify(params),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response: Response) => {
                observer.next(response);
                observer.complete();
            }).catch((error: Error) => {
                observer.error(error);
            });
        });
    }
}
