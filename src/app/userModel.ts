export class User {
    constructor(values: Object = {}) {
    }

    id: number;
    firstName: string;
    lastName: string;
    // dob: Date;
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
