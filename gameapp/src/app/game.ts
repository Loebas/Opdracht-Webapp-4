export class Game {
    constructor(
        private _id: number,
        private _naam: string,
        private _minSpelers: number,
        private _maxSpelers: number,
        private _difficulty: number,

    ) {

    }

    static fromJSON(json: any): Game {
        const g = new Game(json.id, json.naam, json.minSpelers, json.maxSpelers, json.difficulty)
        return g;
    }
}