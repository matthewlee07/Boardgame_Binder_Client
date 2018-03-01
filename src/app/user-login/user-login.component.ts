import { Component } from '@angular/core';
import { User } from '../userModel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(private userservice: UserService) { }
  user: User = new User();
  submitted = false;
  forgotPassword() {
    console.log('resending password');
  }
  onSubmit() {
    this.submitted = true;
    this.userservice.login(this.user)
      .subscribe(
        (user) => {
          console.log('User is logged in');
          console.log(user);
          // this.router.navigateByUrl('/');
        }
      );
  }
}
