const myLifeSummedUp = ['咖啡', '电视', '酒杯', '巧克力'];
for (let item in myLifeSummedUp) {
  console.log(item);
}
// 0,1,2,3,4

for (let val of myLifeSummedUp) {
  console.log(val);
}
// 咖啡 电视 酒杯 巧克力


// for-in循环，我们可以遍历一个对象自有的，继承的，可枚举的，非Symbol的属性。在数组中，可枚举的属性是数组元素的键，即他们的索引
// for-of循环，可以迭代可迭代的对象（Array\Map\Set\String\arguments等）。当我们迭代数组时，在每次迭代中，不同属性的值将被分配给变量