function getAge() {
  'use strict'
  age = 21;
  console.log(age);
}
getAge()
// ReferenceError: age is not defined

// 使用'use strict',可以确保不会意外地声明全局变量，
// 我们从未声明变量age，使用'use strict'，会引发一个ReferenceError