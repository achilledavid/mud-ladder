import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class ConnectionService {
    constructor(public tokenService: TokenService, private router: Router) { }

    public login(username: string, password: string) {
        const user = {
            username: username,
            password: password,
        };
        this.tokenService.setToken(JSON.stringify(user));
        this.router.navigate(['/home']);
    }

    public logout() {
        this.tokenService.deleteToken();
        this.router.navigate(['/login']);
    }
}
