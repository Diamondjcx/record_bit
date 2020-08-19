function checkAge(data) {
  if (data === {
      age: 18
    }) {
    console.log('You are an adult');
  } else if (data == {
      age: 18
    }) {
    console.log('You are still an adult');
  } else {
    console.log('Hmm.. ');
  }
}

checkAge({
  age: 18
})

// 比较相等性，原始类型通过它们的值进行比较，而对象通过它们的引用进行比较，JavaScript检查对象是都具有对内存中相同位置的引用
// 我们作为参数传递的对象和我们用于检查相等性的对象在内存中位于不同位置，所以它们引用是不同的



// const value = {number: 10};
// const multiply = (x) => {
//   console.log(value ===x); // true
//   console.log(value === {number: 10}); // false
//   console.log(x.number *=2)
// }
// multiply(value);  //20
// multiply(value) // 40
// console.log(value); // {number: 40}



const value = {
  number: 10
};
const year = 1997;
const multiply = (x = {
  ...value
}, ) => {
  console.log(x === value) // false
  console.log(x.number *= 2)
}
multiply(); // 20  默认参数在调用时才会进行计算，都会创建一个新的对象
multiply(); // 20
console.log(value); // {number: 20}
multiply(value); // 40
multiply(value) // 40

console.log(value); // {number: 40}
console.log(year) // 若是普通值传递，会创建一个新的变量，不会改变值



const person = {
  name: 'Lydia',
  age: 12
}

const changeAge = (x = {
  ...person
}) => x.age += 1

const changeAgeAndName = (x = {
  ...person
}) => {
  x.age += 1;
  x.name = 'Sarah'
}

changeAge(person)
changeAgeAndName()

console.log(person);
// {name: 'Lydia', age: 13}