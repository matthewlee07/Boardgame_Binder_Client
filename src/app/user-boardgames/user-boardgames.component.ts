import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserBoardgamesService } from '../user-boardgames.service';
import { BoardgameService } from '../boardgame.service';

@Component({
  selector: 'app-user-boardgames',
  templateUrl: './user-boardgames.component.html',
  styleUrls: ['./user-boardgames.component.css']
})
export class UserBoardgamesComponent implements OnInit {
  private games = [];
  constructor(private userservice: UserService, private userboardgameservice: UserBoardgamesService, private boardgameservice: BoardgameService) { }
  ngOnInit() {
    if (this.userservice.isLoggedIn()) {
      this.userboardgameservice.getGames(this.userservice.getuser()).subscribe(user => {
        this.games = user.games;
        this.numberGames = this.games.length;
        this.numberGames > 0 ? this.hasGames = true : this.hasGames = false;
      });
    }
  }
  hasGames: boolean;
  numberGames: number;

  top_page() {
    console.log('top floor please');
    window.scrollTo(0, 50);
  }
}