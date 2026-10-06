let name = "Ayan"
let repoCOunt = 50

console.log(name + repoCOunt + " Value")

console.log(`My name is ${name} and my repo count is ${repoCOunt}`)

const gameName = new String("fifa-2026")

// console.log(gameName)
// console.log(gameName[0])
// console.log(gameName[1])

// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())

// console.log(gameName.charAt(3))
// console.log(gameName.indexOf("a"))

let newString = gameName.substring(0,3)

console.log(newString)

let anotherString = gameName.slice(-3,3)

console.log(anotherString)

let newStringOne = String("    Ayan     ")
console.log(newStringOne)
console.log(newStringOne.trim())

const url = 'https:.//ayan.com/ayan%20afridi'

console.log(url.replace("%20","-"))

console.log(gameName.split("-"))