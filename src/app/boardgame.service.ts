import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Boardgame } from './boardgameModel';

@Injectable()
export class BoardgameService {

  private boardgameUrl = 'http://localhost:8080/boardgames';

  getBoardGame(boardgame): Observable<Boardgame[]> {
    const params = new HttpParams();
    return this.http.get<Boardgame[]>(this.boardgameUrl, { params: boardgame });
  }

  constructor(
    private http: HttpClient
  ) { }

}
