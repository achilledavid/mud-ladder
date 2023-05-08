import { BackendService } from './../BACKEND/backend.service';
import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../MODELS/user.model';
import { Observable, Observer, catchError, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ConnectionService {
    constructor(public tokenService: TokenService, private router: Router, private backend: BackendService) { }

    public login(username: string, password: string): Observable<string> {
        return this.backend.postWithParams('auth/signin', { username: username, password: password })
            .pipe(
                map((response: any) => {
                    if (response.status == 200) {
                        response.json().then((json: any) => {
                            const token: string = json.jwt;
                            this.tokenService.setToken(token);
                            this.router.navigate(['/home']);
                        });
                        return 'success';
                    }
                    else if (response.status == 422) {
                        throw new Error('Invalid username or password');
                    }
                    else if (response.status == 401) {
                        throw new Error('Invalid username or password');
                    }
                    else {
                        throw new Error('Invalid response status');
                    }
                }), catchError((error: any) => {
                    if (error.message == 'Invalid username or password') throw new Error('Invalid username or password');
                    else throw new Error('Failed to log in');
                })
            );
    }

    public signup(user: User): Observable<string> {
        return this.backend.postWithParams('auth/signup', {
            username: user.username,
            password: user.password,
            email: user.email,
            firstname: user.first_name,
            lastname: user.last_name
        }).pipe(
            map((response: any) => {
                if (response.status === 201) {
                    return 'success';
                } else {
                    return response.json().then((json: any) => {
                        const error: string = json.message;
                        if (error.includes('username')) return 'username';
                        else if (error.includes('email')) return 'email';
                        else throw new Error('Invalid response status');
                    });
                }
            }), catchError((error: any) => {
                throw new Error('Failed to sign up');
            })
        );
    }

    public logout() {
        this.tokenService.deleteToken();
        this.router.navigate(['/about-us']);
    }
}
