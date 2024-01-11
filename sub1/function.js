
function Myname(){

    console.log("R");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// Myname()

// function addTwoNum(number, number1) {
//     console.log(number + number1);
// }
// function addTwoNum(number, number1) {
//     let result = number + number1
//     return result
// }

// const result = addTwoNum(7, 8)

// console.log("Result: ", result);


function addTwoNum(number, number1) {
    return number + number1
}

const result = addTwoNum(7, 8)

// console.log("Result: ", result);

function loginMessage(username = "tan") {
    if (username === undefined) {
        console.log("Enter a username");
        return
    }
    return `${username} just logged In `
}

// console.log(loginMessage("Ritesh"));

// console.log(loginMessage("tanu"));

function calculatecartprice(...num){
     return num
}
// console.log(calculatecartprice(100, 234, 567, 763));

const user ={
 username: "Ritesh",
 price: 299
}

function anyobject(myobject){
    console.log(`username is ${myobject.username} and price is ${myobject.price}`);
}

// anyobject(user)
anyobject({
    username: "tanu",
    price: 5999
})


const mynewarr = [200, 300, 488, 868]

function returnsndvalue(getarr) {
    return getarr[1]
}

// console.log(returnsndvalue(mynewarr));

console.log(returnsndvalue([100,400,500,699]));

