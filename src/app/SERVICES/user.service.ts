import { BackendService } from './../BACKEND/backend.service';
import { Injectable } from '@angular/core';
import { User } from '../MODELS/user.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private backend: BackendService, private router: Router) { }

    public getByUsername(username: string) {
        const user = this.backend.get('user/name/' + username);
        if (user) return user;
        else {
            this.router.navigate(['/login']);
            throw new Error('Failed to get user');
        }
    }
}
