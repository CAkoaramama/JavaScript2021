let numbers = [1,2,3]

//  accessing array items
console.log (numbers)
console.log (numbers [0])
console.log (numbers [2])
console.log (numbers.length)
let lastIndex = numbers.length -1
console.log (numbers [lastIndex])

// modify items in the array

let nums = [1,2,3,4,5]
// nums[0] = -5
// console.log (nums)
// nums [1] = 'Potato'
// console.log (nums)
// nums [lastIndex] = 'last index replaced'
// console.log (nums)

console.log (nums)

//  Puxh (最後に追加), pop（最後を削除）, shift（最初を削除）, unshift（最初に追加）　
// nums.push(4)
// console.log (nums)
// nums.unshift (-10)
// console.log (nums)

// nums.pop()
// console.log (nums)
// nums.shift()
// console.log (nums)

// Array.splice: three (index, number, item to be added)
// nums.splice(0,1)
// console.log (nums)

// slice (slice (start, end)and splice

console.log (nums.slice())
console.log (nums.slice (1,4))
let nums_copy = nums.slice()

// String data type
let firstName ='Asabeneh'
let lastName = 'Yetayeh'
let fullName = firstName + ' ' + lastName
let city ='Helsinki'
let country = 'Finland'
let age = 250

// Asabeneh Yetayeh lives in Helsinki. He is 250 years old.

console.log (fullName + ' lives in ' + city + ',' + country+ '.' + 'He is' + age + 'years old')

// String interpolation

console.log (`${fullName} lives in ${city}, ${country}. He is ${age} years old. we can add numbers, really ${1 + 2}`)

