import { Component } from '@angular/core';
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

  name = '';
  minplayers = 2;
  maxplayers = 5;
  minplayingtime = 15;
  maxplayingtime = 60;
  minrating = 7.5;
  maxrating = 10;

  submitted = false;
  onSubmit() { this.submitted = true; }
  search() {
    this.boardgameservice.getBoardGame(
      this.name,
      this.minplayers,
      this.maxplayers,
      this.minplayingtime,
      this.maxplayingtime,
      this.minrating,
      this.maxrating)
      .subscribe(data => this.boardgames = data);
  }

}

