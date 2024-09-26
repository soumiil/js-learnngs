const userEmail = [];

if (userEmail) {
  console.log("Got the user email");
} else {
  console.log("Don't have the user email");
}

/*

Falsy values:
false, 0, -0, BigInt, 0n, "", null, undefined, NaN

Truty values (Remaining all are truthy):
"0", 'false', " ", [], {}, function(){}, etc...

*/

if(userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}

/*

Nullish Coalescing Operator (??): specially made for null & undefined values

*/

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15
val1 = undefined ?? 10 ?? 20
console.log(val1);

/*

Terniary Operator : 
condition ? true : false

*/

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("Less than 80") : console.log("More than 80");