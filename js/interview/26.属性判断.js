const obj = {
  1: 'a',
  2: 'b',
  3: 'c'
};
const set = new Set([1, 2, 3, 4, 5])

console.log(obj.hasOwnProperty('1')); // true
console.log(obj.hasOwnProperty(1)) // true
console.log(set.has('1')) // false
console.log(set.has(1)) // true

// 所有对象键（ 不包含Symbols） 都会被存储为字符串， 即使没有给定字符串类型的键，
// 上面的说法不适用于Set， 所以set.has('1') 返回false