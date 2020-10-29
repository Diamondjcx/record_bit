const person = {
  name: 'Lydia'
}

function sayHi(age) {
  console.log(`${this.name} is ${age}`);
}

const res1 = sayHi.call(person, 21)
const res2 = sayHi.bind(person, 21)

console.log('res1', res1); //返回值是undefined 
console.log('res12', res2); // 返回的是一个绑定this的函数
// 使用两者， 我们可以传递我们想要this关键字引用的对象， 但是.call方法会立即执行
// .bind方法会返回函数的拷贝值， 但带有绑定的上下文， 它不会立即执行