import { Component, OnInit, Input } from '@angular/core';
// import { Component, Input } from '@angular/core';
// import { Router } from '@angular/router';
import { Boardgame } from '../boardgameModel';
// import { User } from '../userModel';
// import { UserService } from '../user.service';
// import { UserBoardgames } from '../user-boardgames-Model';
// import { UserBoardgamesService } from '../user-boardgames.service';

@Component({
  selector: 'app-boardgame-info',
  templateUrl: './boardgame-info.component.html',
  styleUrls: ['./boardgame-info.component.css']
})
export class BoardgameInfoComponent implements OnInit {
  // export class BoardgameInfoComponent {
  showDetails = false;
  @Input() game: Boardgame;
  constructor() { }
  // constructor(private userservice: UserService, private userboardgames: UserBoardgames, private router: Router) { }
  // user: User = new User();
  // addGame() {
  //   if !user.isLoggedIn() { this.router.navigateByUrl('/userLogin')}
  // }

  ngOnInit() {
  }
}
