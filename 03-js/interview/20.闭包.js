(() => {
  let x = (y = 10)
})()

console.log(typeof x); // 'undefined'
console.log(typeof y); // number

let x = (y = 10)
// =>
y = 10; // 相当于增加了一个属性y给全局对象
let x = y; // 块作用域 在外面访问不到