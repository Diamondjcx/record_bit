我们需要向对象person 添加什么，以至执行[...person]时获得形如["xiaofang",21]
const person = {
    name: 'xiaofang',
    age: 21
}
[...person]  // ["xiaofang",21]

*[Symbol.iterator](){yield* Object.values}


对象默认是不可迭代的，如果迭代规则被定义，则可迭代
通过迭代器symbol[Symbol.iterator]来定义迭代规则，其返回一个generator对象
比如构建一个generator函数*[Symbol.iterator]() {}
如果我们想要返回数组['xiaofang',21]:yield* Object.values(this)，这个generator函数一定要
yield对象person的Object.values