import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserBoardgamesService } from '../user-boardgames.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


<<<<<<< HEAD
export class HomeComponent{
  // question about lifecyle hooks, should I use ngOnChanges?
  private games = [];
=======
export class HomeComponent {
>>>>>>> broken
  constructor(private userservice: UserService, private userboardgameservice: UserBoardgamesService) { }

}
