// function getItems(fruitList, ...args, favoriteFruit) {
//   return [...fruitList, ...args, favoriteFruit]
// }
// const res1 = getItems(['banana', 'apple'], 'pear', 'orange')
// console.log('res1', res1); // SyntaxError

function getItems(fruitList, ...args) {
  return [...fruitList, ...args]
}
const res2 = getItems(['banana', 'apple'], 'pear', 'orange')
console.log('res2', res2) //[ 'banana', 'apple', 'pear', 'orange' ]

//  ...args 是剩余参数，剩余参数的值是一个包含所有剩余参数的数组，并且只能作为最后一个参数