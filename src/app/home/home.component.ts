import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserBoardgamesService } from '../user-boardgames.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  constructor(private userservice: UserService, private userboardgameservice: UserBoardgamesService) { }

}
