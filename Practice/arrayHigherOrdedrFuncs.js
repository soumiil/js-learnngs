const students = ["Jhon", "Jhane", "Bill", "Mark"];
const numbers = [1, 2, 5, 6, 3, 6, 7, 4, 6, 7, 7, 6, 6];

students.forEach(function(val) {
    console.log(val + " Agarwal");
})

let newArr = students.map((val) => val + "Jhon");
console.log(newArr);

let ans = students.find((val) => val === "Jhony")
console.log(ans);

let yes = students.includes("Bill")
console.log(yes);

const hasLetterJ = students.filter((val) => val[0] === "J");
console.log(hasLetterJ);

let newArr2 = students.slice(1, 3)
console.log(newArr2);

// Returns new array as well as change in the original array also
let newArr3 = students.splice(1,3);
console.log(newArr3);
console.log(students);


let myHeros = ["IronMan", "Spiderman", "Hulk"]