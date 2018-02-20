export class User {
    constructor(values: Object = {}) {
        // Object.assign(this, values);
        this.firstName = '';
        this.lastName = '';
        // issue
        this.age = [18];
        this.username = '';
        this.password = {
            password: '',
            confirmPassword: ''
        };
        this.email = '';
        this.terms = false;
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
