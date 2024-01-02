 // Premitive

 // 7 types => String, Number, boolean, null, undefined, symbol, BigInt

 const id = Symbol('123')
 const anotherid = Symbol('123')
console.log(id == anotherid);


  const bigNumber = 33434548686878827837n



 // Reference(Non-premitive)

 // Array, Objects, Functions

 const heros = ["Ritesh", "Nitish", "Adarsh"]
let myobj = {
    name: "Ritesh"

 }

 const myfunction = function(){
    console.log("Hello World");
 }


 // stack and heap

 let myName ="RiteshSingh"

 let anothername = myName

 anothername = "AdarshSingh"
 console.log(anothername);
 console.log(myName);

 let user1 ={
   email : "adarsh@gmail.com",
   upi : "use@ybl.com"
 }

 let user2 = user1

 user2.email = "chul@gmail.c"
  console.log(user1.email);
  console.log(user2.email);
