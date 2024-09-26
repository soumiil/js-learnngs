// const map = new Map();

// map.set("IN", "India");
// map.set("USA", "United States of America");
// map.set("Fr", "France");

/* cannot use
for (const key in map) {
    console.log(key);
}
*/

// for (const [key, value] of map) {
//   console.log(key, "->", value);
// }

// const myObject = {
//   game1: "NFS",
//   game2: "Spiderman",
// };

// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);
// }

/* Forin loop is used for objects */

// for (const key in myObject) {
//     console.log(`${key} : ${myObject[key]}`);
// }

// let programming = ["cpp", "js", "rb"]

// for (const key in programming) {
//     console.log(programming[key]);
// }

/* For Each */

// let coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach((val) => {
//     console.log(val);
// })

// coding.forEach(function (val) {
//     console.log(val);
// })

let myCoding = [
  {
    languageName: "Javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
