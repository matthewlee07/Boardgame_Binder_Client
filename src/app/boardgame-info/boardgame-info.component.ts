import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UserBoardgamesService } from '../user-boardgames.service';
import { UserService } from '../user.service';
import { UserBoardgames } from '../user-boardgames-Model';
import { EditGameForm } from '../edit-boardgame-Model';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-boardgame-info',
  templateUrl: './boardgame-info.component.html',
  styleUrls: ['./boardgame-info.component.css']
})
export class BoardgameInfoComponent implements OnInit {
  showDetails = false;
  showEdit = false;
  edit: EditGameForm;
  @Input() game: UserBoardgames;
  @Input() userboardgame: UserBoardgames;
  constructor(private userservice: UserService, private userboardgameservice: UserBoardgamesService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
  }

  addGame() {
    this.userboardgameservice.addGame(this.userservice.getuser(), this.game.id).subscribe(user => {
    });
  }

  deleteGame() {
    this.userboardgameservice.deleteGame(this.userservice.getuser(), this.game.id).subscribe(() => {
      this.router.navigated = false;
      this.router.navigate([this.router.url]);
    });

  }

  ngOnInit() {
    if (this.userservice.isLoggedIn()) {
      this.edit = {
        id: this.game.id,
        userID: this.userservice.getuser().id,
        boardGameID: this.userservice.getuser().boardGameID,
        numplayers: this.game.minplayers,
        playingtime: this.game.playingtime,
        rating: Math.round(this.game.rating),
      };
    }
  }
}
