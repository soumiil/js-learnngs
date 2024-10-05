const promiseOne = new Promise((resolve, reject) => {
    /*Do an async task
    - DB calls, cryptography, network, etc
    */
    setTimeout(() => {
        console.log("Async task is complete");
        resolve();
    }, 1000)
})

promiseOne.then(() => {
    console.log("Promise consumed");
})



new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 2");
        resolve();
    }, 1000)
}).then(() => {
    console.log("Async 2 resolved");
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username: "Chai",
            email: "chai@chaiaurcode.com"
        })
    }, 1000);
})

promiseThree.then((user) => {
    console.log(user);
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({
                username: "Aman",
                password: 123
            })
        } else {
            reject("Error, something went wrong!")
        }
    }, 1000);
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({
                username: "javascript",
                password: 123
            })
        } else {
            reject("Error: JS went wrong!")
        }
    }, 1000);
})

async function consumePromiseFive() {
    const response = await promiseFive
    console.log(response);
}

consumePromiseFive();





async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response); // without using 'await' data has not been retreived yet
        const data = await response.json()
        console.log(data);
    }
    catch(error) {
        console.log("Error: ", error);
    }
}
getAllUsers() // async function returns promise


// fetch('https://jsonplaceholder.typicode.com/users') // fetch also returns a promise
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })