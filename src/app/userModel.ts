export class User {
    constructor(values: Object = {}) {
        // this.firstName = '';
        // this.lastName = '';
        // this.age = [18];
        // this.username = '';
        // this.password = {
        //     password: '',
        //     confirmPassword: ''
        // };
        // this.email = '';
        // this.terms = false;
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
