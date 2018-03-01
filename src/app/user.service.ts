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
  login(user: User) {
    return this.http.post<User>('http://localhost:8080/auth/login', { username: user.username, password: user.password });
    // .shareReplay()
  }
}
