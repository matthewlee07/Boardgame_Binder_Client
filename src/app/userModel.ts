export class User {
    constructor(values: Object = {}) {
    }

    id: number;
    firstName: string;
    lastName: string;
    age: number[];
    username: string;
    password: {
        password: string;
        confirmPassword: string;
    };
    email: string;
    terms: boolean;
}
