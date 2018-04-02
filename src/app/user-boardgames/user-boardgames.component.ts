import { Component, OnInit, Input } from '@angular/core';
import { User } from '../userModel';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { UserBoardgames } from '../user-boardgames-Model';
import { UserBoardgamesService } from '../user-boardgames.service';


@Component({
  selector: 'app-user-boardgames',
  templateUrl: './user-boardgames.component.html',
  styleUrls: ['./user-boardgames.component.css']
})
export class UserBoardgamesComponent implements OnInit {
  private games = [];
  @Input() game: UserBoardgames;
  constructor(private userservice: UserService, private userboardgameservice: UserBoardgamesService) { }

  ngOnInit() {
    if (this.userservice.isLoggedIn()) {
      this.userboardgameservice.getGames(this.userservice.getuser()).subscribe(user => {
        this.games = user.games;
      });
    }
  }
}
