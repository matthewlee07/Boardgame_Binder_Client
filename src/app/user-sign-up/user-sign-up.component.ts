import { Component } from '@angular/core';
import { User } from '../userModel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent {
  constructor(private userservice: UserService) { }
  user: User = new User();
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.userservice.signup(this.user)
      .subscribe(
        (user) => {
          // this.router.navigate('/')
          console.log('User is signed up');
          console.log(user);
        }, err => {
          console.log(err);
        }
      );
  }
}
