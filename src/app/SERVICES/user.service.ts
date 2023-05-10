import { BackendService } from './../BACKEND/backend.service';
import { Injectable } from '@angular/core';
import { User } from '../MODELS/user.model';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private backend: BackendService) { }

    public getByUsername(username: string) {
        return this.backend.get('user/name/' + username);
    }
}
