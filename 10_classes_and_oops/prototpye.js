let myName = "Soumil     ";

// console.log(myName.trueLength());

let myHeros = ["Thor", "Spiderman"];

let heroPower = {
    thor: "Hammer",
    spiderman: "Sling",
    getSpiderPower: function () {
        console.log(`Spidey power is ${this.spiderman}`);
    },
};

Object.prototype.soumil = function () {
    console.log(`Soumil is present in all objects now`);
};

Array.prototype.heySoumil = function () {
    console.log(
        "Soumil says, Hello! And this is now available in all arrays now"
    );
};

// heroPower.soumil();
// myHeros.soumil();

// heroPower.heySoumil();
// myHeros.heySoumil();

// Inheritance

const user = {
    username: "Chai",
    email: "chai@google.com",
};

const Teacher = {
    makeVideo: true,
};

const teachingSupport = {
    isAvailable: false,
};

const taSupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: teachingSupport,
};

Teacher.__proto__ = user;

// Modern Syntax

/* It asks kiski property kiske andar inherit krni hai */
Object.setPrototypeOf(teachingSupport, Teacher);

let anotherUsername = "ChaiaurCode      ";
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
};

anotherUsername.trueLength();
"Soumil ".trueLength();
"ICETEA         ".trueLength();
