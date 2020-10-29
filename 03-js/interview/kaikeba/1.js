var l = 1;
var n = m = 0;

function myFun(x) {
  x = (x++) + 5;
}
n = myFun(l);

function anotherFun(x) {
  x = (--x) + 5;
}
m = anotherFun(n);
console.log(n); // undefined 因为函数没有return
console.log(m); // undefined


var l = 1;
var n = m = 0;

function myFun(x) {
  return x = (x++) + 5; // x先参与计算 然后再自加加
}
n = myFun(l);

function anotherFun(x) {
  return x = (--x) + 5; // x先自减 然后再相加
}
m = anotherFun(n);
console.log(n); // 6
console.log(m); // 10