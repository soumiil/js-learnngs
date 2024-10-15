// const user = {
//   username: "Soumil",
//   loginCount: 8,
//   signedIn: true,
//   getUserDetails: function () {
//     // console.log("Got user details from database");
//     console.log(`Username: ${this.username}`);
//     console.log(this);
//   },
// };

// console.log(user.username);
// console.log(user.getUserDetails());

const User = function(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greetings = () => {
    console.log(`Hello ${this.username}`);
  }
}

const userOne = new User("Soumil", 45, true);

console.log(userOne);