const myArray = [0, 1, 2, 3, 4, 5];
const heros = ["Spiderman", "Batman", "Deadpool", "Captain America"];

myArray.forEach((val) => {
    console.log(val);
})

heros.forEach((val) => {
    console.log(val);
})

console.log(`${myArray.length} ${heros.length}`);