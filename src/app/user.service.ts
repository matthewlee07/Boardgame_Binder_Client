import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from './userModel';

@Injectable()
export class UserService {

  private userUrl = 'http://localhost:8080/users';
  private user = null;
  constructor(
    private http: HttpClient
  ) { }

  signup(user: User) {
    return this.http.post<User>('http://localhost:8080/users/', {
      userName: user.userName,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      // dob: user.dob
    });
  }

  getuser() {
    return this.user;
  }

  isLoggedIn() {
    return !!this.user;
  }

  login(user: User) {
    return this.http.post<User>('http://localhost:8080/auth/login/', {
      // unsure why, but this is the only 'username' vs 'userName'
      username: user.userName,
      password: user.password
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
