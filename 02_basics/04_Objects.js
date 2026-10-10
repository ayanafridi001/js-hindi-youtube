// const tinderUSer = new Object{}
const tinderUSer = {}
tinderUSer.id = 1234
tinderUSer.name = "Sammy"
tinderUSer.isLoggedIn = false

//console.log(tinderUSer)

const regularUser = {
                       email : "email@gmail.com",
                       fullname : {
                                    userfullname : {  firstname : "Ayan", lastname : "Afridi"  }
                                    }     
                    }
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)
// // gives error //   console.log(regularUser.userfullname)

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
const obj3 = {obj1,obj2}
const obj5 = {5:"a" , 6:"b"}

console.log(obj3)

//const obj4 = Object.assign(obj1,obj2,obj5)
const obj4 = {...obj1, ...obj2, ...obj5}
const obj6 = Object.assign({},obj1,obj2,obj5)
console.log(obj4)
console.log(obj6)

const users =  
             [
                {id :1,
                 email:"hot@mail.com"   
                },
                {id :2,
                 email:"hot@mail.com"   
                },
                {id :3,
                 email:"hot@mail.com"   
                },
                {id :4,
                 email:"hot@mail.com"   
                },
                {id :5,
                 email:"hot@mail.com"   
                }
              ]
//console.log(users[0])
console.log(users[1].email)

console.log(tinderUSer)
console.log(Object.keys(tinderUSer))
console.log(Object.values(tinderUSer))
console.log(Object.entries(tinderUSer))

console.log(tinderUSer.hasOwnProperty("isLoggedIn"))
console.log(tinderUSer.hasOwnProperty("isLogged"))