import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './userModel';

@Injectable()
export class UserService {

  private userUrl = 'http://localhost:8080/users';

  constructor(
    private http: HttpClient
  ) { }

}
