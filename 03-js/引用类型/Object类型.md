### Object类型
#### 创建对象
- 一般使用对象字面量创建
- 访问对象，使用点语法或者方括号，方括号可以访问变量，推荐使用点语法

```
const object1 = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

> "a: somestring"
> "b: 42"
```


console.log(`${(x=>x)('I love')} china`);

#### 字面量转换为对象
```
var strPrimitive = "I am a string"; 
console.log( strPrimitive.length ); // 13 
console.log( strPrimitive.charAt( 3 ) ); // "m"

直接在字符串字面量上访问属性或方法。引擎自动把字面量转换成String对象，所以可以访问属性和方法。

42.359.toFixed(2)
引擎会把42转换成new Number(42) 
```
```
var myObject = {
  a:2
};
myObject.a //2 属性访问
myObject['a'] //2 键访问 
实际上是同一个位置，返回相同的值2
```
#### 注
- 在对象中，属性名永远都是字符串。如果你使用 string（字面量）以外的其他值作为属性 名，那它首先会被转换为一个字符串。即使是数字也不例外，虽然在数组下标中使用的的 确是数字，但是在对象属性名中数字会被转换成字符串，所以当心不要搞混对象和数组中 数字的用法：
```
var myObject = { }; 
myObject[true] = "foo"; 
myObject[3] = "bar"; 
myObject[myObject] = "baz"; 
myObject["true"]; // "foo" 
myObject["3"]; // "bar" 
myObject["[object Object]"]; // "baz"
```

#### 复制
- 浅复制
```
var newObj = JSON.parse( JSON.stringify( someObj ) );

var newObj = Object.assign( {}, myObject ); 
newObj.a; // 2 
newObj.b === anotherObject; // true 
newObj.c === anotherArray; // true 
newObj.d === anotherFunction; // true
它会遍历一个或多个源对象的所有可枚举的自有键，并把它们复制(使用=操作符赋值)到目标对象，最后返回目标对象

```

##### [[Get]]
- 属性访问
```
var myObject = {
  a: 2
}
myObject.a // 2

myObject.a是一次属性访问。实际上是实现了[[Get]]操作 (有点像函数调用：[[Get]]() )
对象默认的内置[[Get]]操作首先在对象中查找是否有名称相同的属性
如果找到就会返回这个属性的值
如果没有找到名称相同的属性，按照[[Get]]算法的定义会执行另外一种非常重要的行为
遍历可能存在的[[Prototype]]原型链
如果没有找到名称相同的属性，那[[Get]]操作会返回值undefined
var myObject = {
  a: 2
}
myObject.b // 2
```
- 和访问变量时是不一样的。如果引用了一个当前词法作用域中不存在的变量，并不会像对象属性一样返回undefined，会抛出一个ReferenceError异常
```
var myObject = 
{ 
  a: undefined
};
myObject.a; // undefined 
myObject.b; // undefined

返回值的角度来说，这两个引用没有区别，都返回了undefined，底层的[[Get]]操作对myObject.b进行了更复杂的处理。

```
- 如何区分
```
var myObject = { 
  a: undefined
};
("a" in myObject) // true
("b" in myObject) // false
myObject.hasOwnProperty("a") // true
myObject.hasOwnProperty("b") // false
```
  - in操作符会检查属性是否在对象及其[[Prototype]]原型链中
  - hasOwnProperty()只会检查属性是否在myObject对象中，不会检查原型链
- 存在性
  - 是否可枚举
    ```
    var myObject = {};
    Object.defineProperty(
      myObject,
      "a",
      // a像普通对象一样可枚举
      {enumerable: true, value: 2}
    )
    Object.defineProperty(
      myObject,
      "b",
      // b 不可枚举
      {enumerable: false, value: 2}
    )

    myObject.b; // 3
    ("b" in myObject) // true
    myObject.hasOwnProperty("b") // true

    for(var k in myObject) {
      console.log(k, myObject[k]);
    }
    // "a" 2
    myObject.b确实存在并且有访问值，但是却不会出现在for...in 循环中。
    原因： 可枚举 就相当于可以出现在对象属性的遍历中
    ```

    ```
    var myObject = {};
    Object.defineProperty(
      myObject,
      "a",
      // a像普通对象一样可枚举
      {enumerable: true, value: 2}
    )
    Object.defineProperty(
      myObject,
      "b",
      // b 不可枚举
      {enumerable: false, value: 2}
    )
    myObject.propertyIsEnumerable("a") // true    只判断本身不包含原型
    myObject.propertyIsEnumerable("b") //false
    Object.keys(myObject)  //['a']    只返回可枚举的
    Object.getOwnPropertyNames(myObject) // ["a","b"] 属性都返回  无论是否可枚举
    ```
      - in 和 hasOwnProperty 区别在于是否查找原型链
      - keys 和Object.getOwnPropertyNames 都只会查找对象直接包含的属性

- 遍历
    - for of 循环首选会向被访问对象请求一个迭代器对象，然后通过调用迭代器对象的next()防范来遍历所有返回值
    ```
    var myArray = [1,2,3];
    for(var v of myArray) {
      console.log(v);
    }
    //1 2 3
    ```
    ```
    如何工作
    var myArray = [1,2,3];
    var it = myArray[Symbol.iterator]();
    it.next();  // {value: 1, done: false}
    it.next();  // {value: 2, done: false}
    it.next();  // {value: 3, done: false}
    it.next();  // {done: true}

    ```
