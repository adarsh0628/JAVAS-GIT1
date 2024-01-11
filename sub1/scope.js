let a =300
 
 if (true) {
    let a = 6
    const b = 28
    // console.log("Inner: ",a);
 }


//  console.log(a);
//  console.log(b);
//  console.log(c);
 

 function one(params) {
    const username ="Ritesh"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()
 }
//  one()

if (true) {
   const username = "Ritesh"
    if (username === "Ritesh") {
        const website = " Chatgpt"
        // console.log(username + website);
    }
    // console.log(website); error
}

// console.log(username); error

// ***************Interesting******************


function addone(num) {
    return num + 1
}

console.log(addone(5));

const addtwo = function(num){
    return num + 2
}

addtwo(5)