// Arrays

const myArr = [1,2,3,4,5]
const myHeros = ['Spiderman','Batman','Superman']
console.log(myArr)

const myArr2 = new Array(1,2,3,4,5)
//console.log(myArr2)

// ++++++++++++++++ Array methods  +++++++++++++++

// myArr.push(6)
// myArr.push(7)
// console.log(myArr)

// myArr.pop()
// console.log(myArr)

myArr.unshift(9)
console.log(myArr)

myArr.shift()  // removed 9
myArr.shift()  // removed 1
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(9))
console.log(myArr.indexOf(3))

const newArr = myArr.join()

console.log(myArr)
console.log(newArr)
console.log(typeof(newArr))

// method: slice and splice

console.log("A ", myArr)
const myN1 = myArr.slice(1,3)
console.log(myN1)

console.log("B ", myArr)
const myN2 = myArr.splice(1,3)
console.log(myN2)

console.log("C ", myArr)