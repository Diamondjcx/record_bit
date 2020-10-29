console.log('1 script start');
setTimeout(function () {
  console.log('2 setTimeout');
  Promise.resolve().then(function () {
    console.log('3 promise1');
  });
}, 0);
Promise.resolve().then(function () {
  console.log('4 promise1');
}).then(function () {
  console.log('5 promise2');
});
console.log('6 script end');

// 1 script start 
// 6 script end
// 4 promise1
// 5 promise2
// 2 setTimeout
// 3 promise1



// 第一次
// 浏览器看到script标签 ---外部队列

// 1次  外部队列                                 内部队列
//       1 script start 同步任务，立即执行
//       setTimeout 外部任务                     Promise内部队列
//       6 script end   同步任务，立即执行

// 2次  执行一次外部队列之后，清空内部队列
//                                               4 promise1
//                                               5 promise2

// 3次 再次执行外部队列
//    2 setTimeout
//                                               Promise内部队列入

// 4次 执行完外部队列之后，清空内部队列
//                                               3 promise1