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