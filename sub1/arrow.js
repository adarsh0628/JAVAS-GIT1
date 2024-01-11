const user ={
    username: "Ritesh",
    price: 999,

    welcomemessage: function () {
        console.log(`${this.username} , Welcome to website`);
    } 

}

// user.welcomemessage()
// user.username = "Tanu"
// user.welcomemessage()

//  function tanu(){
//     let username = "Ritesh"
//     console.log(this.username);
//  }
//  tanu()


// const tanu = function(){
//     let username = "Ritesh"
//     console.log(this.username);
//  }
//  tanu()

 const tanu = () =>{
    let username = "Ritesh"
    console.log(this);
 } 
//   tanu()

//  const addtwo= (num, num1) => num + num1 
 const addtwo= (num, num1) => (num + num1)


 console.log(addtwo(22, 6));