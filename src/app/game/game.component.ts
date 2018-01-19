import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { GameComponentService } from './game-component.service';
@Component({
  selector: 'gm-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute, private service: GameComponentService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      const playerData = JSON.parse(localStorage.getItem('playerData'));
      if (playerData === undefined || playerData['token'] === undefined) {
        //
      }
      if (this.service.hasPlayer(this.id, playerData)) {
        //
      }
    });
  }

}
