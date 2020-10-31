// this是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用

// 当一个函数被调用时，会创建一个活动记录（执行上下文）。
// 这个记录会包含函数在哪里被调用（调用栈）、
// 函数调用方式、传递参数等。this就是这个记录中的一个属性，会在函数执行的过程中用到

function baz() {
  // 当前调用栈是： baz
  // 调用位置是全局作用域

  console.log('baz');
  bar(); // bar的调用位置
}

function bar() {
  // 当前调用栈是baz-》bar
  // 调用位置在bar中

  console.log('bar');
  foo(); // foo的调用位置
}

function foo() {
  // 当前调用栈是 baz-》bar-》foo
  // 调用位置在bar中
  console.log('foo');
}
baz(); // baz的调用位置

// 我们是如何从调用栈中分析出真正的调用位置，决定了this的绑定。




// 1、默认绑定
function foo() {
  console.log(this.a);
}
var a = 2;
foo(); // 2
// 分析： 函数调用应用了this的默认绑定，因此this指向全局对象.调用位置是在全局作用域下调用的。
// foo是直接不带任何修饰的函数应用进行调用的，因此是默认绑定

// 特例 在严格模式下，foo()不影响默认绑定
function foo() {
  'use strict';
  console.log(this.a);
}
var a = 2;
foo(); // undefined



// 2、隐式绑定
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: foo
}
obj.foo(); // 2

// 调用位置使用obj上下文引用函数，函数被调用时obj对象""拥有""包含"函数用用。
// 当函数引用有上下文对象时，隐式绑定规则会把函数调用中的this绑定到这个上下文对象， this.a和obj.a是一样的。

function foo() {
  console.log(this.a);
}
var obj2 = {
  a: 42,
  foo: foo
}

var obj1 = {
  a: 2,
  obj2: obj2
}

obj1.obj2.foo() // 42


//隐式丢失
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: foo
}
var bar = obj.foo;
var a = "oops, global";
bar(); //"oops, global"
// bar() 一个不带任何修饰的函数调用，应用默认绑定


// 传入回调函数中
function foo() {
  console.log(this.a);
}

function doFoo(fn) {
  fn();
}
var obj = {
  a: 2,
  foo: foo
}
var a = 'oops, global'

doFoo(obj.foo); // "oops, global"
//  参数传递是一种隐式赋值传入函数也会被隐式赋值。

// 传入内置回调函数中
function foo() {
  console.log(this.a);
}

function doFoo(fn) {
  fn();
}
var obj = {
  a: 2,
  foo: foo
}
var a = 'oops, global'

setTimeout(obj.foo, 100); // "oops, global"

function setTimeout(fn, timeout) {
  fn() // 调用位置
}


// 3、显示绑定
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2
}
foo.call(obj) // 2 
// 调用foo时强制把它绑定到obj上

// 3.1硬绑定
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2
}
var bar = function () {
  foo.call(obj) // 在这里强制绑定硬绑定之后，无论如何调用，foo都会在obj中
}
bar();
setTimeout(bar, 100);

bar.call(window)


/**** */

function foo(something) {
  console.log(this.a, something);
  return this.a + something
}
var obj = {
  a: 2
}
var bar = function () {
  return foo.apply(obj, arguments)
}
var b = bar(3); // 2,3
console.log(b); // 5


// bind
function foo(something) {
  console.log(this.a, something);
  return this.a + something
}
var obj = {
  a: 2
}
var bar = foo.bind(3); // 2,3
var b = bar(3);
console.log(b); // 5

// bind 会返回一个硬编码的新函数，会把执行的参数设置为this的上下文并调用的原始函数

// API调用上下文

function foo(el) {
  console.log(el, this.id);
}
var obj = {
  id: 'awesome'
}
// 调用foo(...)时把this绑定到obj
[1, 2, 3].forEach(foo, obj)
// 1 awesome 2 awesome 3 awesome
这些函数实际上通过call() 或者apply 实现了显示绑定， 少写代码。


// 4 new绑定
// 并不存在所谓的"构造函数"，只有对于函数的"构造调用"

// 使用new来调用函数，自定执行下面操作
// 1.创建（或构造）一个全新的对象
// 2、这个新对象会被执行[[Prototype]]连接
// 3、这个新对象会绑定到函数调用的this
// 4、如果函数没有其他对象，那么new表达式中的函数调用会自动返回这个新对象

function foo(a) {
  this.a = a;
}
var bar = new foo(2)
console.log(bar.a); // 2
// 使用new来调用foo(...)时，会构造一个新对象并把它绑定到foo(...)调用中的this上。


// 判断this
// 1. 函数是否在 new 中调用（new 绑定）？如果是的话 this 绑定的是新创建的对象。 
// var bar = new foo() 
// 2. 函数是否通过 call、apply（显式绑定）或者硬绑定调用？
// 如果是的话，this 绑定的是 指定的对象。 var bar = foo.call(obj2) 
// 3. 函数是否在某个上下文对象中调用（隐式绑定）？
// 如果是的话，this 绑定的是那个上 下文对象。 var bar = obj1.foo() 
// 4. 如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到 undefined，否则绑定到 全局对象。 
// var bar = foo()



// 被忽略的this
function foo() {
  console.log(this.a);
}
var a = 2;
foo.call(null); // 2



function foo(a, b) {
  console.log("a:" + a + ", b:" + b);
}
// 把数组“展开”成参数 
foo.apply(null, [2, 3]); // a:2, b:3
// 使用 bind(..) 进行柯里化
var bar = foo.bind(null, 2);
bar(3); // a: 2 b: 3


// 箭头函数 不使用上面四种规则，而是根据外层（函数或者作用域）来决定this
function foo() {
  // 返回一个箭头函数
  return (a) => {
    console.log(this.a);
  }
}
var obj1 = {
  a: 2
}
var obj2 = {
  a: 3
}
var bar = foo.call(obj1)
bar.call(obj2); // 2 不是3

// foo() 内部创建的箭头函数会捕获调用时 foo() 的 this。
// 由于 foo() 的 this 绑定到 obj1， 
// bar（引用箭头函数）的 this 也会绑定到 obj1，
// 箭头函数的绑定无法被修改。（new 也不 行！）


// 箭头函数最常用于回调函数中，例如事件处理器和定时器
function foo() {
  setTimeout((a) => {
    console.log(this.a);
  }, 200);
}

var obj = {
  a: 2
}

foo.call(obj) // 2


// 等同于

function foo() {
  var self = this;
  setTimeout(function () {
    console.log(self.a);
  }, 200);
}

var obj = {
  a: 2
}
foo.call(obj) // 2