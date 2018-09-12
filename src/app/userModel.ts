export class User {
    constructor(values: Object = {}) {
        this.password = { password: '', confirmPassword: '' };
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
    games;
}
