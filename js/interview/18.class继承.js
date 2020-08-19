// class Counter {
//   #number = 10
//   increment() {
//     this.#number++
//   }
//   getNum() {
//     return this.#number
//   }
// }

// const counter = new Counter()
// counter.increment()

// console.log(counter.#number); // SyntaxError

// ES2020中 通过# 我们可以给class添加私有变量。在class的外部我们无法获取该值，所以报错


class Dog {
  constructor(name) {
    this.name = name
  }
}

class SmallDog extends Dog {
  // 1
  constructor(name, size) {
    this.size = size
  }
  2
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  // 3
  constructor(name) {
    super(name);
    this.size = size
  }
  // 4
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
}

// 2  构造函数会成功集成Dog类

// 在子类中， 调用super之前不能访问到this关键字， 会抛出 ReferenceError 1, 4 会报错
// 使用super关键字， 需要用给定的参数来调用父类的构造函数， 父类构造函数接收name参数， 因此需要将name传递给super

// SmallDog类接收两个参数, name参数是由于它继承了Dog， size作为smallDog类额外属性， 他们都需要传递给SmallDog的构造函数



class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterTwo.count); // 3


// counterOne 是类Counter的一个实例。类Counter包含一个count属性在它的构造函数里，和一个increment方法。首先，我们通过
// counterOne.increment()调用方法increment两次。现在counterOne.oucnt为2
// 然后创建一个新的变量counterTwo并将counterOne的引用地址赋值给它。因为对象受引用地址的影响，他们指向同一个内存地址，任何对其的副作用都会影响