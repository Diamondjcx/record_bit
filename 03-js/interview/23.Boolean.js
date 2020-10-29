// 下面哪些值是假值
0 // 假值
new Number(0)
  ('') // 假值
(" ")
new Boolean(false)
undefined // 假值

console.log(new Number(0)) // [Number: 0]

// JavaScript中只有6个假值
undefined
null
NaN
0
  ''
false

函数构造函数， new Number 和 newBoolean都是真值