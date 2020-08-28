// [[Prototype]]
// 对象有一个特殊的[[Prototype]]内置属性，就是对于其他对象的引用。
// 几乎所有的对象在创建时[[Prototype]]属性都会被赋予一个非空的值
var myObject = {
  a: 2
}
myObject.a //2

// 当试图引用对象的属性时会触发[[Get]]操作，比如myObject.a。对于默认的[[Get]]操作来说
// 第一步是检查对象本身是否有这个属性，如果有就使用。
// 如果a不在myObject中，就需要使用对象的[[Prototype]]


var anotherObject = {
  a: 2
}

// 创建一个关联到anotherObject的对象
var myObject = Object.create(anotherObject)

myObject.a // 2
// 创建一个对象并把这个对象的[[Prototype]]关联到指定的对象

// myObject对象的[[Prototype]]关联到了anotherObject