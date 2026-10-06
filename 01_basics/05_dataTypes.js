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

// ******* Stack (Primitive) & Heap (Non-Primitive) ********

let myYoutubename = "helloGuys"

let anotherName = myYoutubename
anotherName = "DidYouSeetheChange"

console.log(myYoutubename)
console.log(anotherName)

// Now understanding heap

let userOne = { 
                email:"hellogmail.com",
                cnic: 12345
                }

let userTwo = userOne

userTwo.email = "changed@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)