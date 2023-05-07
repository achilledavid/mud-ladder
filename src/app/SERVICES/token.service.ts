import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class TokenService {
    public token: string = '';

    constructor(private router: Router) { }

    public setToken(token: string): void {
        this.token = token;
        sessionStorage.setItem('authToken', token);
    }

    public deleteToken(): void {
        this.token = '';
        sessionStorage.removeItem('authToken');
    }

    public isLoggedIn(): boolean {
        return sessionStorage.getItem('authToken') !== null;
    }

    public redirectToLoginIfNotLoggedIn(): void {
        if (this.router.url !== '/login' && this.router.url !== '/sign-up' && !this.isLoggedIn()) {
            this.router.navigate(['/login']);
        };
    }
}
