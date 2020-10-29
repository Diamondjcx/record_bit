// setTimeout(() => {
//   console.log('timer1');
//   Promise.resolve().then(function () {
//     console.log('promise1');
//   });
// });
// setTimeout(() => {
//   console.log('timer2');
//   Promise.resolve().then(function () {
//     console.log('promise2');
//   });
// });

// timer1
// promise1
// timer2
// promise2

// setTimeout(() => { // 定时器
//   console.log('1 setTimeout1');
//   Promise.resolve().then(() => console.log('2 promise1'));
// });
// setImmediate(() => { // ⽴执⾏
//   console.log('3 setImmediate1');
//   Promise.resolve().then(() => console.log('4 promise3'));
// });
// setTimeout(() => { // 定时器
//   console.log('5 setTimeout2');
//   Promise.resolve().then(() => console.log('6 promise2'));
// });
// setImmediate(() => { // ⽴执⾏
//   console.log('7 setImmediate2');
//   Promise.resolve().then(() => console.log('8 promise4'));
// });
// 3 setImmediate1
// 4 promise3
// 7 setImmediate2
// 8 promise4
// 1 setTimeout1
// 2 promise1
// 5 setTimeout2
// 6 promise2


// const fs = require('fs');
// setImmediate(() => {
//   console.log('setImmediate');
// });
// fs.readdir(__dirname, () => {
//   console.log('fs.readdir');
// });
// setTimeout(() => {
//   console.log('setTimeout');
// });
// Promise.resolve().then(() => {
//   console.log('promise');
// });

// promise     
// setTimeout  
// setImmediate
// fs.readdir 


setTimeout(() => {
  console.log(1)
  Promise.resolve(3).then(data => console.log(data))
}, 0)

setTimeout(() => {
  console.log(2)
}, 0)