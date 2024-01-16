//  const useremail = "ritesh@gmail.com"
 const useremail = []
  if (useremail) {
    console.log("Got user email");
  }else{
    console.log("Don't have user email");
  }

//   falsy value

// false, 0, -0, Bigint 0n, "", null, undefind, NaN

// truthy value

// "0", 'false', " ", [], {}, function(){}

// if (useremail.length === 0) {
//     console.log("empty");
// }

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
}

// Nullish coalescing operator (??): null undefind

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10




// console.log(val1);

// terniary operator

// condition ? true : false

const price = 100

price <= 80 ? console.log("less than 80") : console.log("greater tham 80");