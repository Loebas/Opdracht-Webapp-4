import { Injectable } from '@angular/core';
import { GAMES } from 'src/mock-games';
import { Game } from './game';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  // private _games = GAMES;
  constructor(private http: HttpClient) { }

  public loadError$ = new Subject<string>();
  get games$(): Observable<Game[]> {
    return this.http.get(`${environment.apiUrl}/games/`).pipe(
      catchError(e => { this.loadError$.next(e.statusText); return of(null) }),
      map(
        (list: any[]): Game[] => { return list.map(Game.fromJSON); }
      ));
  }

  // addNewGame(game: Game) {
  //   this._games.push(game);
  // }
}
