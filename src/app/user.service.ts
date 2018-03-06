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
  // currently needs authentication?? [+ '/users'] instead?
  // getAll() {
  //   return this.http.get<User>('http://localhost:8080/users/');
  // }

  // [+ '/users'+_id] instead?
  // getById(_id: string) {
  //   return this.http.get<User>('http://localhost:8080/users/_id');
  // }

  signup(user: User) {
    return this.http.post<User>('http://localhost:8080/users/', {
      userName: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      // dob: user.dob
    });
  }

  login(user: User) {
    return this.http.post<User>('http://localhost:8080/auth/login', {
      username: user.username,
      password: user.password
    });
  }
  // http://jasonwatmore.com/post/2017/02/22/mean-with-angular-2-user-registration-and-login-example-tutorial
  // login(username: string, password: string) {
  //   return this.http.post<any>(appConfig.apiUrl + '/users/authenticate', { username: username, password: password })
  //     .map(user => {
  //       // login successful if there's a jwt token in the response
  //       if (user && user.token) {
  //         // store user details and jwt token in local storage to keep user logged in between page refreshes
  //         localStorage.setItem('currentUser', JSON.stringify(user));
  //       }
  //       return user;
  //     });
  // }

  logout() {
    localStorage.removeItem('user');
  }
}
