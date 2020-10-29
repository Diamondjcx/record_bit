function sayHi() {
    console.log(name); //undefined
    console.log(age); // RefreenceError
    var name = 'Lydia';
    let age = 21;
}
// var 定义的变量存在变量提升，所以会将定义提升，但是赋值并没有提升，所以是undefined
// let 定义的变量不存在变量提升，但是会形成暂时性死区，访问的时候直接会是报错

var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
// 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响


if (true) {
    // TDZ开始
    tmp = 'abc'; // ReferenceError
    console.log(tmp); // ReferenceError
  
    let tmp; // TDZ结束
    console.log(tmp); // undefined
  
    tmp = 123;
    console.log(tmp); // 123
  }