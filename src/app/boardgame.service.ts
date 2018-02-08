import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Boardgame } from './boardgameModel';

@Injectable()
export class BoardgameService {

  private boardgameUrl = 'http://localhost:8080/boardgames';

  getBoardGame(minplayers, maxplayers, minplayingtime, maxplayingtime, minrating, maxrating): Observable<Boardgame[]> {
    const params = new HttpParams()
      .set('minplayers', minplayers)
      .set('maxplayers', maxplayers)
      .set('minplayingtime', minplayingtime)
      .set('maxplayingtime', maxplayingtime)
      .set('minrating', minrating)
      .set('maxrating', maxrating)
      ;
    return this.http.get<Boardgame[]>(this.boardgameUrl, { params: params });
  }

  constructor(
    private http: HttpClient
  ) { }

}
