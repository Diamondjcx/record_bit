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



const getList = ([x,...y]) => [x,y]
const getUser = user=>{name: user.name, age: user.age}
// const getUser = user=>({name: user.name, age: user.age})

const list = [1,2,3,4];
const user = {name: 'Lydia', age: 12}
console.log(getList(list));
console.log(getUser(user));

// getList函数接受一个数组作为参数，在getList函数的括号之间，结构这个数组
// [x, ...y] = [1,2,3,4]
// 使用剩余的参数...y,我们将所有剩余参数放在一个数组中，x=1, y=[2,3,4],打印[x,y] [1,[2,3,4]]


// getUser函数接受一个对象，对于箭头函数，只返回一个值，不必编写花括号，但是如果返回一个对象，必须在圆括号之间编写，否则不返回任何值