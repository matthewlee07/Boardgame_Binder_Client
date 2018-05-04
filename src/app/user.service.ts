import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { User } from './userModel';

@Injectable()
export class UserService {

  private user = null;
  constructor(private http: HttpClient) { }

  private handleError<T>(error: Response | any) {
    console.log('An error has happened', error);
    return Observable.throw(error.error.message);
  }

  signup(user: User) {
    return this.http.post<User>('https://boardgame-binder.herokuapp.com/', {
      userName: user.userName,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      // dob: user.dob
    })
      .pipe(catchError(this.handleError));
  }

  getuser() {
    return this.user;
  }

  isLoggedIn() {
    // why use !!
    return !!this.user;
  }

  login(user: User) {
    return this.http.post<any>('https://boardgame-binder.herokuapp.com/', {
      // unsure why, but this is the only 'username' vs 'userName'
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
// http://jasonwatmore.com/post/2017/02/22/mean-with-angular-2-user-registration-and-login-example-tutorial
