class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get password() {
        return `pas${this._password}this`
    }

    set password(value) {
        this._password = value.toUpperCase();
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;
    }
}

const soumil = new User("soumil@mail.com", "soumil");
console.log(soumil.password);
