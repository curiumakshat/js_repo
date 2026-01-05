//string interpolation

const name = "Akshatraj"
const repoCount = 4

//console.log(`hey! my name is ${name.toUpperCase()}, and i have repocount ${repoCount}`)
// console.log(`hey my name is ${name}, and i have repocount ${repoCount}`)
// const gameName = new String('curium')

// console.log(gameName.length)    
// console.log(name.length)
// //slice takes negative value
// //  const newStringOne = name.slice(2,5)
// const newStringOne = "  akshatraj    "
//  console.log(`${newStringOne.trim()}nu`);
//  console.log(newStringOne.trim())

const url="https://curiumblogs.vercel%20app"

console.log(url.replace('vercel%20app','vercel.app'))


url.replace("vercel%20app","vercel.app")
console.log(url)

// i want to convert string to arrays

const stringToArray = url.split('.');
console.log(stringToArray)