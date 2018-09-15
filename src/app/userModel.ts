export class User {
    constructor() {
    }

    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    password: {
        password: string;
        confirmPassword: string;
    };
    email: string;
    terms: boolean;
    token: string;
    games
}
