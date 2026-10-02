// Primitive 
// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 10
const scoreValue = 10.3

const isLoggedIn = false
const outsideTemp = null

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid)

// Non-Primitive 
// Arrays, Objects, Functions

let heros = ["Spiderman", "Batman", "Superman"]

let myObj = {name:"Ayan", age:25}

let myFunc = function()
                    {
                        console.log("Hello from function");
                    }

console.log(myFunc())