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