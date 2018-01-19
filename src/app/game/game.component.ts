import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'gm-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute, private r: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  toJoin(id) {
    this.r.navigate(['join']);
  }

}
