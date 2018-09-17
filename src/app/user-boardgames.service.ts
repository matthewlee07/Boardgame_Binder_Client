import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { User } from './userModel';

@Injectable()
export class UserBoardgamesService {
  constructor(private http: HttpClient) { }
  private handleError<T>(error: Response | any) {
    return Observable.throw(error.error.message);
  }

  getGames(user) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${user.token}`
      })
    };
    return this.http.get<User>('http://localhost:8080/userboardgames', httpOptions);
  }

  addGame(user, gameID) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${user.token}`
      })
    };
    return this.http.post<any>('http://localhost:8080/userboardgames', { boardgameID: gameID }, httpOptions);
  }

  editGame(user, gameID, numplayers, playingtime, rating) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${user.token}`,
      })
    };
    return this.http.put<any>('http://localhost:8080/userboardgames/' + gameID, {
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
    return this.http.delete<any>('http://localhost:8080/userboardgames/' + gameID, httpOptions);
  }
}
