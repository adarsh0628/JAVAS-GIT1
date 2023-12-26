const accountId = 144553
let  accountEmail = "adarsh@google.com"
var  accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 3 // not allowedr
accountEmail = "ritesh@rc.com"
accountPassword = "22222"
accountCity = "Dehli"

let accountstate;


/*
Prefer not to use var because of issu in  block scope and functional scope

*/
console.log(accountId);


console.table([accountId, accountEmail, accountPassword, accountCity, accountstate])