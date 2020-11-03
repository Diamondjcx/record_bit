// 定义一个对象
let car = {
  brand: 'benchi',
  price: 4000
};

// 1、使其变成可观测
let car = {}
let val = 3000

Object.defineProperty(car, 'price', {
  enumerable: true,
  configurable: true,
  get() {
    console.log('price属性被读取了');
    return val
  },
  set(newVal) {
    console.log('price属性被修改了');
    val = newVal
  }
})

// try
car.price // 访问的时候会执行get方法，输出 4000  price属性被读取了
car.price = 5000 // 重新给price设置新值， 会执行set方法  输出  price属性被修改了


// 2、使car所有属性变得可观测

// 源码位置：src/core/observer/index.js


/**
 * Observer类会通过递归的方式把一个对象的所有属性都转化成可观测对象
 */


export class Observer {
  constructor(value) {
    this.value = value
    // 给value新增一个__ob__属性，值为该value的Observer实例
    // 相当于为value打上标记，表示它已经被转化成响应式了，避免重复操作
    // def(value, '__ob__', this)
    if (Array.isArray(value)) {
      // 当value为数组时的逻辑
      // ...
    } else {
      this.walk(value)
    }
  }

  walk(obj) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i])
    }
  }
}
/**
 * 使一个对象转化成可观测对象
 * @param { Object } obj 对象
 * @param { String } key 对象的key
 * @param { Any } val 对象的某个key的值
 */
function defineReactive(obj, key, val) {
  // 如果只传了obj和key，那么val = obj[key]
  if (arguments.length === 2) {
    val = obj[key]
  }
  if (typeof val === 'object') {
    new Observer(val)
  }
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log(`${key}属性被读取了`);
      return val;
    },
    set(newVal) {
      if (val === newVal) {
        return
      }
      console.log(`${key}属性被修改了`);
      val = newVal;
    }
  })
}


let car = new Observer({
  'brand': 'BMW',
  'price': 3000
})