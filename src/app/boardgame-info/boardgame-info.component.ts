import { Boardgame } from '../boardgameModel';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UserBoardgamesService } from '../user-boardgames.service';
import { UserService } from '../user.service';
import { UserBoardgames } from '../user-boardgames-Model';
import { EditGameForm } from '../edit-boardgame-Model';

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

  ngOnInit() {
    this.edit = {
      id: this.game.id,
      userID: this.userservice.getuser().id,
      boardGameID: this.userservice.getuser().boardGameID,
      numplayers: this.game.minplayers,
      playingtime: this.game.playingtime,
      rating: Math.round(this.game.rating),
      comments: ''
    };
    console.log(this.edit);
    console.log(this.game);
  }
}
