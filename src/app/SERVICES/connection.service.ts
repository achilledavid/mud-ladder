import { TokenService } from './token.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ConnectionService {
    constructor(private tokenService: TokenService) { }

    public login(username: string, password: string) {
        const user = {
            username: username,
            password: password,
        };
        this.tokenService.token = JSON.stringify(user);
        sessionStorage.setItem('token', this.tokenService.token);
    }

    public logout() {
        this.tokenService.token = '';
        sessionStorage.removeItem('token');
    }
}
