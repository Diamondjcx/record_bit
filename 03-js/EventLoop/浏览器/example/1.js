console.log('1 script start');
setTimeout(function () {
  console.log('2 setTimeout');
}, 0);
Promise.resolve().then(function () {
  console.log('3 promise1');
}).then(function () {
  console.log('4 promise2');
});
console.log('5 script end');

// 1 script start
// 5 script end  
// 3 promise1    
// 4 promise2    
// 2 setTimeout



// 第一次
// 浏览器看到script标签 ---外部队列

// 1次  外部队列                                 内部队列
//       1 script start 同步任务，立即执行
//       setTimeout 外部任务                      Promise内部队列
//       5 script end   同步任务，立即执行

// 2次  执行一次外部队列之后，清空内部队列
//                                               3 promise1
//                                               4 promise2

// 3次 再次执行外部队列
//     2 setTimeout