// primitive

// 7 primitive data types in JavaScript
// 1. string
let name = "Akshat" // string
// 2. number
let score = 33 // number
// 3. boolean
let isLoggedIn = false // boolean
// 4. undefined
let temp; // undefined
// 5. null
let emptyValue = null // null
// 6. bigint
let bigNumber = 1234567890123456789012345678901234567890n // bigint
// 7. symbol
let uniqueId = Symbol("myId") // symbol is used to create unique identifiers


// *********** non-primitive (reference) *************
// 1. object
let person = {
    name: "Akshat",
    age: 22
} // object 
// 2. array
let numbers = [1,2,3,4,5] // array is a type of object
// 3. function
function greet() {
    console.log("Hello Akshat");
} // function is also a type of object


//check wether js is dynamically typed or not
let score1 = 33 // number
console.log(typeof score1); // number