// const tinderUser = new Object(); // Singleton object
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userFullName: {
//             firstName: "Soumil",
//             lastName: "Agarwal"
//         }
//     }
// }

// // console.log(regularUser.fullname.firstName);

// const obj1 = {
//     1: "a",
//     2: "b",
//     3: "c",
//     4: "d"
// }

// const users = [
//     {
//         id: 1,
//         email: "agarwalsoumil6@gmail.com"
//     },
//     {
//         id: 2,
//         email: "agarwalsoum@gmail.com"
//     },
//     {
//         id: 3,
//         email: "agarwil6@gmail.com"
//     }
// ]

// users.forEach((val) => {
//     console.log(val);
// })

// console.log(Object.keys(tinderUser), Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));







const course = {
    courseName: "JS in Hindi",
    price: "Rs.999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor 

const {courseInstructor} = course
console.log(courseInstructor);