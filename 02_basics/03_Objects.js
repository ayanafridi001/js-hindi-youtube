// Singelton
// object create


// Object literals

const mySym = Symbol("key1")

const JsUser = 
                {
                    name : "Ayan",
                    "full name" : "Ayan Afridi",
                    [mySym] : "mykey1" ,
                    age : 25,
                    location : "Peshawar",
                    email : "ayan@gmail.com",
                    isLoggedIn : "false",
                    lastLogInDays : ["Monday", "Saturday"]
                }

// console.log(JsUser.name)
// console.log(JsUser["name"])
//  it is an error // console.log(JsUser."full name")
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof(JsUser[mySym]))

// JsUser.email ="ayan@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email ="ayan@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function()
                    {
                        console.log("Hello Js USer")
                    }   
JsUser.greetingTwo = function()
                    {
                        console.log(`Hello Js USer, this is ${this["full name"]}`)
                    }   

console.log(JsUser.greeting())                    
console.log(JsUser.greetingTwo())   