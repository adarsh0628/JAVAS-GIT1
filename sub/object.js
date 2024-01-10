//  Singleton
// Object.create

// Object Literals
const sym = Symbol("key")

const user = {
    name: "Ritesh",
    [sym]: "ritesh",
    age: 19,
    location: "Noida",
    email: "Ritesh@gmail.com",
    IsloggedIn: false,
    lastLogin: ["Monday", "Saturday"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user[sym]);

user.location = "Dehli"

// console.log(user.location);
// Object.freeze(user)
user.location = "Jaipur"
// console.log(user);

user.greeting = function(){
    console.log("Hello");
}
console.log(user.greeting);
console.log(user.greeting());
user.greeting1 = function(){
    console.log(`HelloHi,${this.name}`);
}
console.log(user.greeting1);
console.log(user.greeting1());