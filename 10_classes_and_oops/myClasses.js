// Class based approach
// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`;
//     }

//     toCapital() {
//         return this.username.toUpperCase();
//     }
// }

// Behind the scene - Function based approach
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`;
};
User.prototype.toCapital = function () {
    return this.username.toUpperCase();
};

const chai = new User("Chai", "chai@gmail.com", "123");
console.log(chai.encryptPassword());
console.log(chai.toCapital());
