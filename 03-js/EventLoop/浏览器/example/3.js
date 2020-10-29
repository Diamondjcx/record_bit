setTimeout(() => {
  console.log('setTimeout1')
  // promise
})
Promise.resolve().then(() => {
  console.log('promise1')
})
setTimeout(() => {
  console.log('setTimeout2')
})
Promise.resolve().then(() => {
  console.log('promise2')
})
Promise.resolve().then(() => {
  console.log('promise3')
})
console.log('script end');

// script end
// promise1
// promise2
// promise3
// setTimeout1
// setTimeout2




// 第一次
// 浏览器看到script标签 ---外部队列

// 1次  外部队列                                 内部队列

//       setTimeout1 外部队列                    Promise1内部队列
//       setTimeout2 外部队列                    Promise2内部队列
//                                               Promise3内部队列
//       script end立即执行

// 2次  执行一次外部队列之后，清空内部队列
//                                               promise1
//                                               promise2
//                                               Promise3

// 3次 再次执行外部队列
//    setTimeout1 外部队列


// 4次 执行完外部队列之后，清空内部队列
//    setTimeout2 外部队列