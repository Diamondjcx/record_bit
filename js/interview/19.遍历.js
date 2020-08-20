const person = {
  name: 'Lydia',
  age: 21
};
const res = Object.entries(person) // 返回一个给定对象自身可枚举属性的键值对数组，返回一个二维数组，数组每个元素是一个包含键和值得数组
console.log(res); // [['name', 'Lydia'], ['age', 21]]
for (const [x, y] of Object.entries(person)) {
  console.log(x, y);
  // x:name y:Lydia
  // x:age y: 21
}

for (const [i, j] in person) {
  console.log('i---', i, 'j---', j);
  // i--- n j--- a
  // i--- a j--- g
}

for (item in person) {
  console.log('item', item);
  // item name
  // item age
}

const info = {
  [Symbol('a')]: b
}
console.log(info); // {Symbol('a'):b} 
console.log(Object.keys(info)); //[]
// Symbol类型是不可枚举的
// Object.keys方法返回对象上所有可枚举的键属性
// 特性： 表示完全唯一的值（防止变量名冲突）
// 隐藏这种方法对象的属性（不完全，仍然可以使用Object.getOwnPropertySymbols()方法访问Symbol）