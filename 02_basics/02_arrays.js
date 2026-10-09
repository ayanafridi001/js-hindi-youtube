const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Flash", "Batman", "Superman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros)

const newHeros = marvel_heros.concat(dc_heros)
console.log(newHeros)

const allnewHeros = [...marvel_heros , ...dc_heros]
console.log(allnewHeros)



// const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const newAnotherArray = anotherArray.flat(Infinity)
// console.log(newAnotherArray)


console.log(Array.isArray("Ayan-Afridi"))
console.log(Array.from("Ayan-Afridi"))
console.log(Array.isArray({name : "Ayan-Afridi"}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))
