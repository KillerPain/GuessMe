import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameComponentService } from './game-component.service';
import { Router } from '@angular/router';

@Component({
  selector: 'gm-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  id: number;
  
  constructor(private route: ActivatedRoute, private r: Router, private service: GameComponentService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      const playerData = JSON.parse(localStorage.getItem('playerData'));
      if (playerData === null || playerData['token'] === null) {
        return;
      }
      if (!this.service.hasPlayer(this.id, playerData)) {        
        return;
      }
    });
  }

  toJoin(id) {
    this.r.navigate(['join']);
  }

}
