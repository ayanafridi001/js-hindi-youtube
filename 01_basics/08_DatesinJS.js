let myDate = new Date()

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof(myDate))

let myCreateDate = new Date(2023,0,23)
let myCreateDate2 = new Date(2023,0,23,5,3)

// console.log(myCreateDate.toDateString())
// console.log(myCreateDate2.toDateString())
// console.log(myCreateDate2.toLocaleString())

//let newDate = new Date('2023-01-14')
let newDate = new Date("01-14-2023")
console.log(newDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(newDate.getTime())

console.log(Date.now()/1000)
console.log(Math.floor(Date.now()/1000))

//Date functions

let myNewDate = new Date()

console.log(myNewDate)
console.log(myNewDate.getMonth() + 1)
console.log(myNewDate.getDay())

console.log(myNewDate.toLocaleString('default', {weekday: "long", timeZone:"Europe/London"})
)
