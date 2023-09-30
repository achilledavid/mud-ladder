import { TokenService } from 'src/app/SERVICES/token.service';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class BackendService {
    private base_url: string = 'http://localhost:3000/';
    private bearer_token: string = '';

    constructor(private token: TokenService) { }

    get(url: string): Observable<Response> {
        if (!this.verifyToken() || !this.bearer_token || this.bearer_token == '') return new Observable((observer: Observer<Response>) => {
            observer.error(new Error('No token found'));
        });
        else {
            return new Observable((observer: Observer<Response>) => {
                fetch(this.base_url + url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + this.bearer_token
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

    getWithoutToken(url: string): Observable<Response> {
        return new Observable((observer: Observer<Response>) => {
            fetch(this.base_url + url, {
                method: 'GET',
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

    getWithParams(url: string, params: any): Observable<Response> {
        if (!this.verifyToken()) return new Observable((observer: Observer<Response>) => {
            observer.error(new Error('No token found'));
        });
        else {
            return new Observable((observer: Observer<Response>) => {
                fetch(this.base_url + url + '?' + params, {
                    method: 'GET',
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

    postWithParams(url: string, params: any): Observable<Response> {
        if (!this.verifyToken()) return new Observable((observer: Observer<Response>) => {
            observer.error(new Error('No token found'));
        });
        else {
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

    postWithParamsWithoutToken(url: string, params: any): Observable<Response> {
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

    verifyToken(): boolean {
        const token: string = this.token.getToken();
        if (token === '') return false;
        else {
            this.bearer_token = token;
            return true;
        }
    }
}
