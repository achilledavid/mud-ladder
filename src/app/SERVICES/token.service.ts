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
        this.router.navigate(['/about-us']);
    }
}
