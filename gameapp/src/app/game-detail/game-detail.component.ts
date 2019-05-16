import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../game';
import { GAMES } from 'src/mock-games';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  @Input() detailedGameId: number = 3;

  detailedGame: Game = GAMES[this.detailedGameId];
  constructor() {
    this.detailedGameId = 3;

  }

  ngOnChanges() {

    this.detailedGame = GAMES[this.detailedGameId - 1];
  }

  ngOnInit() {
  }

}
