import { BackendService } from './../BACKEND/backend.service';
import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ConnectionService {
    constructor(public tokenService: TokenService, private router: Router, private backend: BackendService) { }

    public login(username: string, password: string): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            this.backend.postWithParams('auth/signin', { username: username, password: password })
                .then((response) => {
                    if (response.status === 200) {
                        return response.json();
                    } else {
                        throw new Error('Error while logging in');
                    }
                })
                .then((response) => {
                    this.tokenService.setToken(response.jwt);
                    this.router.navigate(['/home']);
                    observer.next(response);
                    observer.complete();
                })
                .catch((error) => {
                    observer.error(error);
                });
        });
    }

    public logout() {
        this.tokenService.deleteToken();
        this.router.navigate(['/login']);
    }
}
