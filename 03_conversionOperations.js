let score = "Akshat" // string
let valueInNumber= Number(score) // convert to number
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // 33

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1 // number
let booleanValue = Boolean(isLoggedIn) // convert to boolean
console.log(typeof booleanValue);
console.log(booleanValue); // true

// 1 => true
// 0 => false
// "" => false
// "Akshat" => true
// null => false
// undefined => false

console.log(typeof NaN); // number

let someNumber = 123

let stringValue = String(someNumber) // convert to string
console.log(typeof stringValue);
console.log(stringValue); // "123"

// ***************** Operations *****************

let value = 3
let negValue = -value // unary negation
console.log(negValue); // -3

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(5%2); // modulus operator gives remainder   
console.log(2**3); // exponentiation 2 to the power 3

let str1 = "Hello "
let str2 = "Akshat"

let str3 = str1 + str2 // string concatenation
console.log(str3); // Hello Akshat

// console.log("1" + 5); // 15
// console.log