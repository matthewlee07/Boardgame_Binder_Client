import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { User } from './userModel';
import { UserBoardgames } from './user-boardgames-Model';
import { RequestOptions, Headers } from '@angular/http';

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
    return this.http.get<any>('http://localhost:8080/userboardgames', httpOptions);
  }

  /** POST: add a new hero to the database */
  // addHero(hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('addHero', hero))
  //     );
  // }

  addGame(user, gameID) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${user.token}`
      })
    };
    return this.http.post<any>('http://localhost:8080/userboardgames', { boardgameID: gameID }, httpOptions);
  }

  // hasGame() {

  // }

  // editGame() {

  // }

  deleteGame(user, gameID) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${user.token}`
      })
    };
    return this.http.delete('http://localhost:8080/userboardgames', httpOptions);
  }
}
