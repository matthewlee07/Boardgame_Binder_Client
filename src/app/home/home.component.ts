import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../userModel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  constructor(private userservice: UserService) { }

}
