// function addTwoNumbers(num1, num2) {
//     return num1 + num2;
// }
// const result = addTwoNumbers(3, 3);
// console.log(`Result: ${result}`);

// function loginUserMessage(username = "Nobby") {
//     return `${username} just logged in!`;
// }

// console.log(loginUserMessage("Soumil"));

function calculateCartPrice(...num1) {
    return num1
}
let sum = 0;
// console.log(calculateCartPrice(200, 400, 500, 234, 434));

const user = {
    username: "Soumil",
    price: "999"
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)

const myNewArray = [100, 200, 300, 400];
function returnSecVal(getArray) {
    return getArray[1];
}
console.log(returnSecVal(myNewArray));