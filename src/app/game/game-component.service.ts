import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class GameComponentService {
  apiUrl = 'http://localhost:8080/GuessMe';
  gameUrl = '/api/game/';
  hasPlayerActionUrl = '/has_player';

  constructor(private http: HttpClient) { }

  hasPlayer(gameId, player) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json;');
    return this.http.post(this.gameUrl + gameId + this.hasPlayerActionUrl, {
      token: player.token,
    }, { headers: headers }).toPromise().then((data: any) => {
      return (data['result'] == 1);
    }).catch(error => {
      console.log(error);
    });
  }

}
