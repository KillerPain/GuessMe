import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class GameComponentService {
  apiUrl = 'http://localhost:8080/GuessMe';
  gameUrl = '/api/game/';

  constructor(private http: HttpClient) { }

  hasPlayer(gameId, player) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json;');
    this.http.post(this.gameUrl + gameId, {
      token: player.token,
    }, { headers: headers }).toPromise().then((data: any) => {
      return (data['result'] === '1');
    }).catch(error => {
      console.log(error);
    });
  }

}
