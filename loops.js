//  LOOP (繰り返し）)
// What are loops?
// whay need them?
// to repeat,


/* for (initional, condition, increm/decrem) {
}*/
for (let i = 1; i<= 10; i = i + 1) {
  console.log (`${i} x ${i} = ${i * i}`)
}

/*
3
2
1
0
for (let i = 3; i>= 0; i--)
*/

for (let i = 5; i>= 0; i -- ) {
  console.log (i, i * i, i ** i)
}

// while loop

/*
let count = 0
while (condition) {
  console.log ('sss)
  increment/decrement
}
0
1
2
3
let count = 0
while (count <= 3) {
  console.log (count)
  count ++
}
*/

let count = 0
while (count <= 3) {
  console.log ('count; ', count)
  count ++
}

// first do and check

const shoppingCart = ['Mango', 'Milk', 'Honey', 'Suger', 'coffee', 'Meat']
const newProduct =[]

for (let i = 0; i < shoppingCart.length; i++) 
  if (shoppingCart[i]. length === 4)
  {newProduct.push(shoppingCart[i])
  console.log (shoppingCart [i])
  console.log (shoppingCart [i]. toUpperCase())
}
console.log (newProduct)

const newArr = []
for (let i = shoppingCart.length -1; i >= 0; i--) {
  newArr.push (shoppingCart[i])
}
console.log (newArr)