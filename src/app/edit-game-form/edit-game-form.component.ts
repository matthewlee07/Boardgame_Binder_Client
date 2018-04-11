import { Component, OnInit, Input } from '@angular/core';
import { EditGameForm } from '../edit-boardgame-Model';
import { UserBoardgames } from '../user-boardgames-Model';

@Component({
  selector: 'app-edit-game-form',
  templateUrl: './edit-game-form.component.html',
  styleUrls: ['./edit-game-form.component.css']
})
export class EditGameFormComponent implements OnInit {
  @Input() edit: EditGameForm;
  @Input() game: UserBoardgames;
  constructor() { }
  counter = Array.from(Array(20).keys());
  ratings = Array.from(Array(21).keys()).map(i => i / 2);
  onReset() {
    // this.edit.numplayers = 5;
    this.edit.numplayers = this.game.minplayers;
  }

  ngOnInit() {
  }
}
