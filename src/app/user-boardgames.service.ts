import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { User } from './userModel';
import { UserBoardgames } from './user-boardgames-Model';
import { RequestOptions, Headers } from '@angular/http';
import { UserService } from './user.service';

@Injectable()
export class UserBoardgamesService {

  constructor(private http: HttpClient) { }
  private boardgames = [];

  private handleError<T>(error: Response | any) {
    console.log('An error has happened', error);
    return Observable.throw(error.error.message);
  }

  getGames(user) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${user.token}`
      })
    };
    return this.http.get<User>('https://boardgame-binder.herokuapp.com/userboardgames', httpOptions);
  }

  addGame(user, gameID) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${user.token}`
      })
    };
    return this
      .http
      .post<any>('https://boardgame-binder.herokuapp.com/userBoardgames', { boardgameID: gameID }, httpOptions);
  }

  // hasGame() {

  // }

  editGame(user, gameID, numplayers, playingtime, rating) {
    console.log('gameID: ' + gameID);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${user.token}`,
      })
    };
    return this.http.put<any>('https://boardgame-binder.herokuapp.com/userBoardgames/' + gameID, {
      numplayers: numplayers,
      playingtime: playingtime,
      rating: rating
    },
      httpOptions);
  }

  deleteGame(user, gameID) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${user.token}`,
      })
    };
    return this.http.delete<any>('https://boardgame-binder.herokuapp.com/userBoardgames/' + gameID, httpOptions);
  }
}
