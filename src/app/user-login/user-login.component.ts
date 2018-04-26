import { Component } from '@angular/core';
import { User } from '../userModel';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(private userservice: UserService, private router: Router) { }
  user: User = new User();
  submitted = false;
  loggedIn = false;
  err = null;
  forgotPassword() {
    console.log('resending password not functional');
  }

  onSubmit() {
    this.submitted = true;
    this.userservice.login(this.user)
      .subscribe(
        (authToken) => {
          this.userservice.saveuser(authToken);
          this.router.navigateByUrl('/home');
          this.loggedIn = true;
        }, err => {
          this.err = err;
        }
      );
  }
}
