const {
  name: myName
} = {
  name: 'Lydia'
} // myName会爆红 没有定义这个变量
console.log(name); // undefined

[...'Lydia']
// =>
['L', 'y', 'd', 'i', 'a']

console.log('I want pizza' [0]) // 'I'