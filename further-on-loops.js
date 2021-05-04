// retular loop


// for (init, condition, incre/decre {})
// 0 => 100

// for (let i = 0; i <= 10; i ++) {
//   console.log (i)
// }

// for (let i = 0; i <= 10; i = i + 2) {
//   console.log (i)
// }

// for (let i = 10; i>= 0; i--) {
//   console.log (i)
// }

// while loop

// let count = 0
// while (count <11) {
//   console.log (count)
//   count ++
// }

// 下のようにwhile loopで様々なことができるので覚えておくとよい

/* 
const arr = []
while array.length != 10 {

}
*/

// do while loop　（あまり使い道は少ない）


// let count = 0
// do {
//   console.log (count)
//   count ++
// } while (count < 11)

const items = ['Mango', 'Milk', 'Honey', 'Sugar', 'Coffee', 'Meat']
console.log ('Reguler for loop')

for (let i = 0; i < items.length; i++) {
  console.log (i, items [i]. toUpperCase ())
}

console.log ('forEach Loop')
items.forEach ((item, index) =>{
  console.log (index + 1, item.toUpperCase())})

  // for of (よく使うとても良い)
for (const item of items) {
  console.log (item.toUpperCase())
}

// for in
const user = {
  name: 'John',
  age:25,
  skills: ['HTML', 'CSS', 'JS']
}
for (const key in user) {
  console.log (key, user [key])

}

// higher Order Function: is a function that takes another function as a parameter or return a function

// const makeSquare = (n) => n**2

// function cube (func, n){
//   return func (n) * n
// }
// console.log (cube (makeSquare, 3))
// function cube (callback, n) {
//   return callback(n) * n
// }
// console.log (cube (makeSquare, 2))

function xyz (n) {
  return {sum: (x, y) => x + y,
          product: (x,y) => x * y}}
  console.log (xyz ().product (2,30))
  console.log (xyz(). sum (99,1))

// Functional Programming: map, filter, reduce, some, any, fine, findIndex

