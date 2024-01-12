// if
// const isloggedin = true
// const temperature = 41
// if (temperature === 42){
//     console.log("Less than 41");
// }else{
// console.log("temperature is greater than 41");
// }
// console.log("execute");

// < greater then , > less then , <= lessthen equalto, >= greater then equal to, == equal to, != not equal to , === strict equal 


// const num =200
// if (num > 100){
//     const power = "fly" // block scope
//     console.log(`power is ${power}`);
// }

// console.log(`power is ${power}`); // block scope ko scope ke bahar call kr rahe hai is liye error aayega 


const bal = 1000
// if (bal > 500) console.log("test"),//  console.log("test2");
if(bal < 500){
    console.log("less than 500");
}else if(bal < 750){
    console.log("less than 750");
}else if(bal < 900) {
    console.log("less than 900");
}else{
    console.log("less than 1200");
}