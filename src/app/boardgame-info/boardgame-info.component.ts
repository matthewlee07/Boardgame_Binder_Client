import { Boardgame } from '../boardgameModel';
import { Component, Input } from '@angular/core';
import { UserBoardgamesService } from '../user-boardgames.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-boardgame-info',
  templateUrl: './boardgame-info.component.html',
  styleUrls: ['./boardgame-info.component.css']
})
export class BoardgameInfoComponent {
  showDetails = false;
  @Input() game: Boardgame;
  constructor(private userservice: UserService, private userboardgameservice: UserBoardgamesService) { }
  addGame() {
    this.userboardgameservice.addGame(this.userservice.getuser(), this.game.id).subscribe(user => {
      console.log('added game');
    });
    console.log('trying to add game');
  }

}
