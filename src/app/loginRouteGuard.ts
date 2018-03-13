import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class LoginRouteGuard implements CanActivate {

    constructor(private userservice: UserService) { }

    canActivate() {
        return this.userservice.isLoggedIn();
    }
}
