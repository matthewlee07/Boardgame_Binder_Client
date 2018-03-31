import { Component, OnInit } from '@angular/core';
import { User } from '../userModel';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { UserBoardgamesService } from '../user-boardgames.service';


@Component({
  selector: 'app-user-boardgames',
  templateUrl: './user-boardgames.component.html',
  styleUrls: ['./user-boardgames.component.css']
})
export class UserBoardgamesComponent{

  constructor(private userservice: UserService, public userboardgameservice: UserBoardgamesService) { }

}
