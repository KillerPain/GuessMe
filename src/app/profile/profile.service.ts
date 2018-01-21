import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getPhoto(username) {
    if (this.isLoggedIn()) {
      return this.http.post("https://zv5yt8g8j2.execute-api.us-east-2.amazonaws.com/test/avatar/getbyusername", { username: username });
    }
  }

}
