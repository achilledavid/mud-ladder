import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class TokenService {
    public token: string = '';
    public endpoint: string = '';

    constructor() { }

    public getToken(): string {
        return sessionStorage.getItem('authToken') || '';
    }

    public setToken(token: string): void {
        this.token = token;
        if (token === '' || !token) sessionStorage.removeItem('authToken');
        else sessionStorage.setItem('authToken', token);
    }

    public deleteToken(): void {
        this.token = '';
        sessionStorage.removeItem('authToken');
    }

    public decodeToken(): any {
        const token: string = this.getToken();
        if (token === '' || !token) return {};
        else return JSON.parse(atob(token.split('.')[1]));
    }

    public isLoggedIn(): boolean {
        return sessionStorage.getItem('authToken') !== null;
    }
}
