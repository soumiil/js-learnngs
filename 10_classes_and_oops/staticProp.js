class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createID(){
        return `123`;
    }
}

const soumil = new User("Soumil");
// console.log(soumil.createID());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();
// console.log(iphone.createID());