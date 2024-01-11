//  Singleton

// const Nexlerate = Object()

// console.log(Nexlerate);

const user = {}

user.id = "123345"
user.name = "Chuimui"
user.IsloggedIn = false

// console.log(user);

const user1 = {
    email: "adarsh@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Gullu",
            lastname: "Singh"
        }
    }
}

// console.log(user1.fullname.userfullname);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 ={...obj1, ...obj2}

// console.log(obj3); 

const users =[
    {
        id: 1,
        email: "rt@gmail"
    },
    {
        id: 2,
        email: "T@gmail"
    },

]

users[1].email
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty('name'));

const fee ={
    coursename: "c lang",
    price: "999",
    courseteacher: "Ritesh"
}

// fee.coursename

const {courseteacher: teacher} = fee

console.log(teacher);

// {
//     "name": "Ritesh",
//     "coursename": "js",
//     "price": "free"
// }
