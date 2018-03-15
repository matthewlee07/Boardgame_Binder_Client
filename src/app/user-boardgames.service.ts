import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserBoardgames } from './user-boardgames-Model';
import { User } from './userModel';

@Injectable()
export class UserBoardgamesService {

  // private user = null;
  constructor(private http: HttpClient) { }

  // fetchGames() {
  //   return this.userboardgames;
  // }

}
