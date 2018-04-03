import { Boardgame } from '../boardgameModel';
import { Component, Input } from '@angular/core';
import { UserBoardgamesService } from '../user-boardgames.service';
import { UserService } from '../user.service';
import { UserBoardgames } from '../user-boardgames-Model';
@Component({
  selector: 'app-boardgame-info',
  templateUrl: './boardgame-info.component.html',
  styleUrls: ['./boardgame-info.component.css']
})
export class BoardgameInfoComponent {
  showDetails = false;
  @Input() game: Boardgame;
  @Input() userboardgame: UserBoardgames;
  constructor(private userservice: UserService, private userboardgameservice: UserBoardgamesService) { }

  addGame() {
    this.userboardgameservice.addGame(this.userservice.getuser(), this.game.id).subscribe(user => {
    });
  }

  editGame() {
    this.userboardgameservice.editGame(
      this.userservice.getuser(),
      this.userboardgame.id,
      this.userboardgame.minplayers,
      this.userboardgame.maxplayers,
      this.userboardgame.playingtime,
      this.userboardgame.rating).subscribe();
    console.log('trying to edit');
  }

  deleteGame() {
    console.log('deleting game');
    this.userboardgameservice.deleteGame(this.userservice.getuser(), this.game.id).subscribe();
  }
}
