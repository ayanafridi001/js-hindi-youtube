let score1 = "33"
let score2 = "33abc"
let score3 = null
let score4 = undefined

console.log(score1, typeof score1)
console.log(score2, typeof score2)
console.log(score3, typeof score3)
console.log(score4, typeof score4)

let ValueInNumber1 = Number(score1)
console.log(ValueInNumber1)

let ValueInNumber2 = Number(score2)
console.log(ValueInNumber2)

let ValueInNumber3 = Number(score3)
console.log(ValueInNumber3)

let ValueInNumber4 = Number(score4)
console.log(ValueInNumber4)


//Also the above for boolean &
//String


/*  ********************Operations***************************  */

let value = 3
let negValue = -value

console.log(negValue)

// console.log(2+3)
// console.log(2-3)
// console.log(2*3)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

console.log(1+"2")
console.log("1"+2)
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(+true)
// console.log(true+) //Will give error
console.log(+"")

let gameCounter = 100
gameCounter++
console.log(gameCounter)