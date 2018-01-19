import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class JoinService {
  addPlayerUrl = '/api/game/';
  urlAction = '/add_player';

  constructor(private http: HttpClient, private r: Router) { }

  addPlayer(gameID, name) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json;');
    const url = this.addPlayerUrl + gameID + this.urlAction;
    return this.http.post(url, {
      name: name,
    }, { headers: headers }).toPromise().then((data: any) => {
      localStorage.setItem('playerData', JSON.stringify({ token: data.token, name: data.name}));
    }).catch(error => {
      console.log(error);
    });
  }

}
