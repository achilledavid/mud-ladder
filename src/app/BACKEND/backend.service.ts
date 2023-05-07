import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class BackendService {
    base_url: string = 'http://localhost:3000/';

    constructor() { }

    postWithParams(url: string, params: any) {
        return fetch(this.base_url + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });
    }
}
