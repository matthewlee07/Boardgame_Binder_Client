import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { User } from './userModel';
import { UserBoardgames } from './user-boardgames-Model';

@Injectable()
export class UserBoardgamesService {

  // private user = null;
  constructor(private http: HttpClient) { }

  private handleError<T>(error: Response | any) {
    console.log('An error has happened', error);
    return Observable.throw(error.error.message);
  }

  // getGames() {
  //   return this.userboardgames;
  // }

}
