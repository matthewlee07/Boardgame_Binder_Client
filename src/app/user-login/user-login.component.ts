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
  forgotPassword() {
    console.log('resending password');
  }

  onSubmit() {
    this.submitted = true;
    this.userservice.login(this.user)
      .subscribe(
        (user) => {
          this.userservice.saveuser(user);
          this.router.navigateByUrl('/home');
          console.log('User is logged in');
          console.log(user);
        }
      );
    // this.userservice.userBoardgames(this.user)
    //   .subscribe(
    //     (user) => {

    //     }
    //   );
  }
}
