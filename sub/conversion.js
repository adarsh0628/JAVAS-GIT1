let score = "33abc"

console.log(typeof score );
console.log(typeof (score) );

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// "true"  => 1

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; o => false
// "" => false 
//"Ritesh" => true

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);