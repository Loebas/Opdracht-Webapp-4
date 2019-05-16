import { Component, OnInit, ViewChild } from '@angular/core';
import { Game } from '../game';
import { GAMES } from 'src/mock-games';
import { MatSort, MatTableDataSource } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { GameDataService } from '../game-data.service';
import { MatFormFieldModule } from '@angular/material/form-field'
import { Subject, Observable } from 'rxjs';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  private _games: Game[];
  selectedGameId: number;
  filterTerm$ = new Subject<String>();
  public laaderror$ = this._gameDataService.loadError$;

  get games$(): Observable<Game[]> {
    return this._gameDataService.games$;
  }

  get games(): Game[] {

    return this._games;
  }

  // addNewGame(game) {
  //   this._gameDataService.addNewGame(game);
  // }


  constructor(private _gameDataService: GameDataService) {

    this._gameDataService.games$.subscribe(g => { this._games = g; this.gameDataSource.data = this.games; });
    this.selectedGameId = 1;
    this.filterTerm$.pipe(map(x => x.toLowerCase())).subscribe(term => this.gameDataSource.filter = term);


  }



  // voor weergave in tabel + sortering
  columnsToDisplay = ['naam', 'minSpelers', 'maxSpelers', 'difficulty'];
  gameDataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;

  // klik op rij => selecteer spel
  selectGame(rowdata) {
    this.selectedGameId = rowdata['id'];
  }


  ngOnInit() {
    this.gameDataSource.sort = this.sort;

  }
}