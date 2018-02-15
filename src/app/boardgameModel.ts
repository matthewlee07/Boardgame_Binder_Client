export class Boardgame {
    // does this do anything? or should it be as a constructor and used in model
    constructor() {
        this.name = '';
        this.minplayers = 2;
        this.maxplayers = 10;
        this.minplayingtime = 15;
        this.maxplayingtime = 60;
        this.minrating = 5;
        this.maxrating = 10;
    }

    id: number;
    name: string;
    description: string;
    image: string;
    minplayers: number;
    maxplayers: number;
    minplayingtime: number;
    maxplayingtime: number;
    minrating: number;
    maxrating: number;
}
