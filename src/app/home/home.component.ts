import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../userModel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor(private userservice: UserService) { }
  private user: User;

  ngOnInit() {
    this.user = this.userservice.getuser();
  }

}
