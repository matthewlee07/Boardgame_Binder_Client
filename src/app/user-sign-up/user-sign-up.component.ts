import { Component } from '@angular/core';
import { User } from '../userModel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent {
  constructor() { }
  user: User = new User();
  age = Array.from(Array(83).keys()).map(i => i + 18);
  submitted = false;

  onSubmit() { this.submitted = true; }

}
