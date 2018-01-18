import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class AuthService {

  apiUrl = 'http://localhost:8080/GuessMe';
  loginUrl = '/api/profile/login';
  registerUrl = '/api/profile/register';

  constructor(private http: HttpClient) { }

  isLoggedIn(): Boolean {
    // TODO(nurlashko): Add check and token refresh if needed
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.token) {
        return true;
    } else {
        return false;
    }
}

  login(email: string, password: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json;');
    this.http.post(this.loginUrl, {
        email: email,
        password: password
    }, {headers: headers}).toPromise().then((data: any) => {
      localStorage.setItem('userData', JSON.stringify({ token: data.token, username: data.firstname + " " + data.lastname}));
    }).catch(error => {
      console.log(error);
    });
  }

  register(firstname: string, lastname: string, password: string, email: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json;');
    this.http.post(this.registerUrl, {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
    }, {headers: headers}).toPromise().then((data: any) => {
      localStorage.setItem('userData', JSON.stringify({ token: data.id, username: firstname + " " + lastname}));
    }).catch(error => {
      console.log(error);
    });
  }
}