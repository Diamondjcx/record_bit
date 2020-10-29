let config = {
  alert: setInterval(() => {
    console.log('Aleart');
  }, 1000)
}
config = null

// setInterval的回调仍然会每秒钟调用
// 一般情况下将对象置为null，被垃圾回收，但是里面有一个箭头函数（上下文绑定到对象config）
// 回调函数仍然保留着对config的引用，所以不会被垃圾回收