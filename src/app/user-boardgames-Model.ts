export class UserBoardgames {
    constructor(values: Object = {}) {
    }

    id: number;
    userName: string;
    games: {
        id: number;
        description: string;
        image: string;
        minplayers: number;
        maxplayers: number;
        playtimetime: number;
        name: string;
        rating: number;
        UserBoardGame: {
            id: number;
            userID: number;
            boardGameID: number;
            description: string;
            image: string;
            minplayers: number;
            maxplayers: number;
            playtimetime: number;
            name: string;
            rating: number;
        };
    };
}
