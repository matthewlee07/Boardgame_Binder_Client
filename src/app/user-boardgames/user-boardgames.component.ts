import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserBoardgamesService } from '../user-boardgames.service';

@Component({
  selector: 'app-user-boardgames',
  templateUrl: './user-boardgames.component.html',
  styleUrls: ['./user-boardgames.component.css']
})
export class UserBoardgamesComponent implements OnInit {
  private games = [];
  constructor(private userservice: UserService, private userboardgameservice: UserBoardgamesService) { }
  ngOnInit() {
    let hasGames;
    let numberGames;
    if (this.userservice.isLoggedIn()) {
      this.userboardgameservice.getGames(this.userservice.getuser()).subscribe(user => {
        this.games = user.games;
        numberGames = this.games.length;
        numberGames > 0 ? this.hasGames = true : this.hasGames = false;
      });
    }
  }
  hasGames: boolean;
  numberGames: number;
}