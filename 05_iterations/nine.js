const myNums = [1,2,3]

// const total = myNums.reduce((acc, currVal) => {
//     console.log(`Accumilator: ${acc}, Current Value: ${currVal}`);
//     return acc + currVal;
// }, 0);

// const total = myNums.reduce((acc, currVal) => acc + currVal, 0);

// console.log(total);


const shoppingCart = [
    {
        itemName: "JS Course",
        price: 299
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "Mobile Dev Course",
        price: 5000
    },
    {
        itemName: "Data Science Course",
        price: 12000
    }
]

const shoppingCartTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(shoppingCartTotal);