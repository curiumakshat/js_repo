// console.log("Akshat raj")
const accountID= 144553
let acountEmail="curiumakshat@gmail.com"
var accountPassword="Akshat@123"
accountCity="Jaipur"

// constant variables cannot be changed
// accountID= 2
// console.log(accountID) will give error

accountEmail="hc@.com"
accountPassword="newpassword123"
accountCity="Delhi"

console.log(accountID)
console.log(acountEmail)
console.table([accountID,acountEmail,accountPassword,accountCity])

/*
prefer not to use var because of issue in block scope and functional scope
let and const are block scoped
*/

let accountState;
console.log() // undefined