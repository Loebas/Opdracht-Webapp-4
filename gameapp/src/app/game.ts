export class Game {
    constructor(
        private _id: number,
        private _naam: string,
        private _minSpelers: number,
        private _maxSpelers: number,
        private _difficulty: number,

    ) { }

    get id(): number {
        return this._id;
    }
    get naam(): string {
        return this._naam;
    }
    get minSpelers(): number {
        return this._minSpelers;
    }
    get maxSpelers(): number {
        return this._maxSpelers;
    }
    get difficulty(): number {
        return this._difficulty;
    }



    static fromJSON(json: any): Game {
        const g = new Game(json.id, json.naam, json.minSpelers, json.maxSpelers, json.difficulty)
        return g;
    }
}