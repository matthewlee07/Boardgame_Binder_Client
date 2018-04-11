import { Component } from '@angular/core';
import { Boardgame } from '../boardgameModel';
import { BoardgameService } from '../boardgame.service';

@Component({
  selector: 'app-boardgame-search-form',
  templateUrl: './boardgame-search-form.component.html',
  styleUrls: ['./boardgame-search-form.component.css']
})
export class BoardgameSearchFormComponent {
  constructor(private boardgameservice: BoardgameService) { }

  boardgames = [];
  counter = Array.from(Array(20).keys());
  ratings = Array.from(Array(21).keys()).map(i => i / 2);
  boardgame: Boardgame = new Boardgame();

  submitted = false;
  onSubmit() { this.submitted = true; }
  onReset() {
    this.boardgame = new Boardgame();
  }
  search() {
    this.boardgameservice.getBoardGame(
      this.boardgame)
      .subscribe(data => this.boardgames = data);
  }

}

