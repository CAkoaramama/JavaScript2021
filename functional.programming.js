// map, filter, reduce, find, findIndex, some, every

const nums = [1, 2, 3, 4, 5]
// [1, 4, 9, 16, 25]
newArr = []
for (let i = 0; i < nums.length; i ++) {
  newArr.push (nums [i] * nums [i])
}
console.log (newArr)

const numsSquare = nums.map ((item) => item * item)
const even = nums.filter ((item) => item % 2 == 0)

console.log (numsSquare)
console.log (even)

// const total = nums.reduce ((acc, curr) => acc + curr)
// let total = 0
// for (const num of nums) {
//   total = total + num
// }
// console.log (total)

const total = nums.reduce ((acc, curr) => acc * curr , 1)
console.log (total)

// find

let three = nums.find((item) => item > 3)
console.log (three)
let indexOfThree = nums.findIndex ((item) => item == 3)
console.log (indexOfThree)

console.log(nums.every((num) => num % 2 == 0))

const now = new Date ()
const year = now.getFullYear()
const month = now.getMonth()
const date = now.getDate ()
const hours = now.getHours ()
const minutes = now.getMinutes()

console.log (now.getFullYear())
console.log (now.getMonth() + 1)
console.log (now.getDate())
console.log (now.getDay())
console.log (now.getHours())
console.log (now.getMinutes())

console.log (`${year}/${month}/${date}`)


