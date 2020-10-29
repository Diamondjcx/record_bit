const person = {
  name: 'lily',
  address: {
    street: '100 main st'
  }
}

person.name = 'even';
person.pet = {
  name: 'Mare'
}
// 会对person产生副作用
person.address.street = '101'
delete person.address
console.log('person', person);
// 在使用Object.freeze对一个对象进行冻结，不能对属性进行添加，修改及删除
// 它对对象进行浅冻结， 只有对象中的直接属性被冻结， 如果属性是另一个object， 
// 像案例中的address， address中的属性没有被冻结， 仍然可以修改