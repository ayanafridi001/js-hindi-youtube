function sayMyName(){
    console.log("A")
    console.log("Y") 
    console.log("A")
    console.log("N")           
}

sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
     
}


const Result = addTwoNumbers(3,4)
console.log("Result : ", Result)

// function userLoggedIn(username){
//     return `${username} jsut logged in`
// }
// console.log(userLoggedIn("Ayan Afridi"))

function userLoggedIn(username){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    
    return `${username} jsut logged in`
}
console.log(userLoggedIn())


/////////////  +++++++++++++++++  //////////////////

function myShoppingCart(...num1){
    return num1
}

console.log(myShoppingCart(200,300,500))

const myObj = {
    name:"Ayan",
    price:100
}

function handleObject(anyObject){
    console.log(`My name is ${anyObject.name} and price is ${anyObject.price}`)
}
//handleObject(myObj)
handleObject({name:"Ayan Afridi",price:200})

const newArray = [100,200,300]

function passArray(getArray){
    return getArray[2]
}
//console.log(passArray(newArray))
console.log(passArray([400,500,600]))