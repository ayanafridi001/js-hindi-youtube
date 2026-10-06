const score = 100
console.log(score)

const balance = new Number(150)

console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(1))

const otherNumber = 123.894

const hundred = 100000

console.log(otherNumber.toPrecision(4))
console.log(hundred.toLocaleString())
console.log(hundred.toLocaleString('en-In'))

//   +++++++++++++++ Math  ++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.3))
// console.log(Math.ceil(4.3))
// console.log(Math.floor(4.7))
// console.log(Math.min(4,3,7,8))
// console.log(Math.max(4,3,7,8))

console.log(Math.random())
console.log(Math.random()*10 + 1)

console.log(Math.floor(Math.random()*10) + 1)

min = 10
max = 20

console.log( Math.floor(Math.random() * (max - min + 1)) + min )
