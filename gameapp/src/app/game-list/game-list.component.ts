import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GAMES } from 'src/mock-games';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[];
  selectedGame: Game;
  columnsToDisplay = ['naam', 'minSpelers', 'maxSpelers', 'difficulty'];

  constructor() {
    this.games = GAMES;
    this.selectedGame = this.games[1];

  }

  ngOnInit() {
  }

}
