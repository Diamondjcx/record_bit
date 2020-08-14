const obj = {
  1: 'a',
  2: 'b',
  3: 'c',
  4: '5'
};
const set = new Set([1, 2, 3, 4, 5])

console.log(obj.hasOwnProperty('1'));
console.log(obj.hasOwnProperty(1))
console.log(set.has('1'))
console.log(set.has(1))


// 所有对象键（不包含Symbols）都会被存储为字符串，即使没有给定字符串类型的键
// Set不同，没有"1"，所以返回false