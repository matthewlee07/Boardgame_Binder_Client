import { Component, OnInit, Input } from '@angular/core';
import { EditGameForm } from '../edit-boardgame-Model';
import { UserBoardgames } from '../user-boardgames-Model';
import { UserBoardgamesService } from '../user-boardgames.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-game-form',
  templateUrl: './edit-game-form.component.html',
  styleUrls: ['./edit-game-form.component.css']
})
export class EditGameFormComponent implements OnInit {
  @Input() edit: EditGameForm;
  @Input() game: UserBoardgames;
  @Input() userboardgame: UserBoardgames;
  constructor(private userservice: UserService, private userboardgameservice: UserBoardgamesService, ) { }
  counter = Array.from(Array(20).keys());
  ratings = Array.from(Array(21).keys()).map(i => i / 2);
  onReset() {
    this.edit.numplayers = 5;
    this.edit.playingtime = 120;
    this.edit.rating = 7.5;
    // this.edit.numplayers = this.game.minplayers;
  }

  save() {
    this.userboardgameservice.editGame(
      this.userservice.getuser(),
      this.userboardgame.id,
      this.userboardgame.minplayers,
      this.userboardgame.maxplayers,
      this.userboardgame.playingtime,
      this.userboardgame.rating).subscribe();
    console.log('trying to edit');
  }

  ngOnInit() {
  }
}
