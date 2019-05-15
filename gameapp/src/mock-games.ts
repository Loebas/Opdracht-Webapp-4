import { Game } from './app/game';

const JsonGames = [
    {
        id: 1,
        naam: 'Splendor',
        minSpelers: 2,
        maxSpelers: 4,
        difficulty: 2
    },
    {
        id: 2,
        naam: 'Le Havre',
        minSpelers: 2,
        maxSpelers: 5,
        difficulty: 4
    },
    {
        id: 3,
        naam: 'Street Soccer',
        minSpelers: 2,
        maxSpelers: 2,
        difficulty: 2
    },
    {

        id: 4,
        naam: 'Scotland Yard',
        minSpelers: 2,
        maxSpelers: 5,
        difficulty: 3

    }



    // json.id, json.naam, json.minSpelers, json.maxSpelers, json.difficulty, json.imageUrl)


];

export const GAMES: Game[] = JsonGames.map(Game.fromJSON);