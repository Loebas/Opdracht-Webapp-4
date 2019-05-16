import { Pipe, PipeTransform } from '@angular/core';
import { Game } from './game';

@Pipe({
  name: 'gameFilter'
})
export class GameFilterPipe implements PipeTransform {

  transform(games: Game[], term: string): Game[] {
    if (!term || term.length === 0)
      return games;
    return games.filter(g => g.naam.toLowerCase().startsWith(term.toLowerCase()))


  }

}
