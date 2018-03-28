import { Component } from '@angular/core';
import { User } from '../userModel';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent {
  constructor(private userservice: UserService, private router: Router) { }
  user: User = new User();
  err = null;

  onSubmit() {
    this.userservice.signup(this.user)
      .subscribe(
        user => {
          this.user = user;
          console.log('', user);
          this.err = null;
          this.userservice.logout();
          this.router.navigateByUrl('/userLogin');
        }, err => {
          this.err = err;
        }
      );
  }
}
