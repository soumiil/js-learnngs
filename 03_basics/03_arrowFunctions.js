// const user = {
//     username: "Soumil",
//     price: "999",
//     welcomeMessage: function() {
//         console.log(`Hi ${this.username}, welcome to the website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username = "Hitesh"
// user.welcomeMessage()

// function chai() {
//     let username = "hitesh"
//     console.log(username);
// }
// chai();

const chai = () => {
    let username = "hitesh"
    console.log(this);
}
chai();