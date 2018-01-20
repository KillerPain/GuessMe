import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class GameComponentService {
  gameUrl = '/api/game/';
  hasPlayerActionUrl = '/has_player';
  allPlayersActionUrl = '/get_all_players';

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

  getAllPlayers(gameId) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json;');
    return this.http.get(this.gameUrl + gameId + this.allPlayersActionUrl, 
    { headers: headers }).toPromise().then((data: any) => {
      return data;
    }).catch(error => {
      console.log(error);
    });
  }

}
