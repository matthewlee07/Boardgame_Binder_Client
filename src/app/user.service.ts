import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { catchError } from 'rxjs/operators';
import { User } from './userModel';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  private user = null;

  private handleError<T>(error: Response | any) {
    return Observable.throw(error.error.message);
  }

  signup(user: User) {
    return this.http.post<User>('http://localhost:8080/users/', {
      userName: user.userName,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    })
      .pipe(catchError(this.handleError));
  }

  getuser() {
    return this.user;
  }

  isLoggedIn() {
    return !!this.user;
  }

  login(user: User) {
    return this.http.post<any>('http://localhost:8080/auth/login/', {
      username: user.userName,
      password: user.password,
    });
  }

  saveuser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

  logout() {
    localStorage.removeItem('user');
    this.user = null;
  }
}

