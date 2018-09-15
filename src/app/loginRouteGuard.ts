import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class LoginRouteGuard implements CanActivate {
    constructor(private userservice: UserService, private router: Router) { }

    canActivate() {
        if (this.userservice.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['/home']);
            return false;
        }
    }
}
