### Array类型
#### 检测数组
- instanceof 它假定只有一个全局执行环境，如果网页有多个框架，实际上存在两个以上不同的全局执行环境，从而存在两个以上不同版本的Array构造函数，如果从一个框架向两一个框架传入一个数组，那么传入的数组与在第二个框架中原生创建的数组分别具有不同的构造函数。
- 使用Array.isArray()判定是否是数组
#### 转换方法
- 所有对选哪个都有toLocaleString()\toString()\valueOf()方法
```
const colors = ['red', 'yellow', 'green']
console.log(colors.toString()); // red,yellow,green
console.log(colors.valueOf()); // 返回的是本身 ["red", "yellow", "green"]
console.log(colors.toLocaleString()); // red,yellow,green
```
- join转化方法 转化为字符串
```
var colors = ['red','yellow'];
console.log(colors.join(",")); // red,yellow
console.log(colors.join()); // red,yellow 默认是逗号分隔
console.log(colors.join('||')) // red||yellow
```
##### 栈方法 （先进后出，因为只有一个口，在顶部）
- push 返回值是length， pop返回值是弹出的哪一项 改变原数组
```
const colors = ['red', 'yellow','green'];
count = colors.push('pink');
console.log(count); // 4
console.log(colors); // ["red", "yellow", "green", "pink"]

const popItem = colors.pop(); 
console.log(popItem); // 弹出的项
console.log(colors) // ["red", "yellow", "green"]
```
##### 队列方法 先进先出
- 模拟    shift push   末端进，前端取
```
var colors = ['red','yellow', 'pink'];
var count = colors.push('green'); // 向末尾添加一项
console.log(count) //4 返回数组的长度
console.log(colors);//["red", "yellow", "pink", "green"]  改变原数组

const item = colors.shift(); // 从前面删除一个
console.log(item) // red
console.log(colors); //["yellow", "pink", "green"]
```
- 模拟反对列  unshift pop 前端进，末端取
```
var colors = ['red','yellow', 'pink'];
var count = colors.unshift('green'); // 从前面插入一个
console.log(count) //4
console.log(colors);//[ "green","red", "yellow", "pink",]

const item = colors.pop(); // 从后面删除一个
console.log(item) // pink
console.log(colors); //["green","red", "yellow",]
```
##### 重排序方法
- reverse()反转数组  sort()对数组排序
- sort()方法会调用每个数组的toString()转型方法，然后比较得到的字符串，以确定如何排序，即使为数值
```
const arr = [1,5,3,8,4];
const result = arr.reverse()
console.log(result); // [4, 8, 3, 5, 1] 反转之后的结果
console.log(arr); // [4, 8, 3, 5, 1]

const result1 = arr.sort()
console.log(result1); //[1, 3, 4, 5, 8]  字符串对应的前后
console.log(arr); //[1, 3, 4, 5, 8]

function compare(val1, val2) {
    return val2-val1
}
const re = arr.sort(compare);
console.log(re) //[8, 5, 4, 3, 1]
console.log(arr);//[8, 5, 4, 3, 1]
```
##### 操作方法
- concat() 创建副本，直接在最后追加,不会改变原数组
```
const colors = ["red", "green", "blue"]; 
const result = colors.concat() // 没有参数相当于创建了一个副本，相当于浅拷贝
console(result) //["red", "green", "blue"]
console(colors) //["red", "green", "blue"]

const a = [{name: 123},{age: 22}] 
const re = a.concat()  //相当于浅拷贝
a[0]["eat"]='吃饭'
console(re) //[{name: 123, eat: '吃饭'},{age: 22}]
console(a) //[{name: 123, eat: '吃饭'},{age: 22}]

const colors = ["red", "green", "blue"]; 
const colors2 = colors.concat("yellow", ["black", "brown"]); 
console(colors); //red,green,blue 不会改变原数组
console(colors2); //red,green,blue,yellow,black,brown
```
- slice() 截取数组，不会改变原数组
 - 一个参数情况下，从此索引开始，一直截取到最后一项
 ```
 const arr = [{name: 'xiao'},{age: 14},{eat:'吃饭'},{run:'跑步'}];
 const re = arr.slice(1);
 console.log(re); //[{age: 14},{eat:'吃饭'},{run:'跑步'}]
 console.log(arr); // [{name: 'xiao'},{age: 14},{eat:'吃饭'},{run:'跑步'}]

 ```
 - 两个参数的情况下，从第一个索引开始截取到第二个索引，不包括第二个索引的值
 ```
 const arr1 = [1,3,4,5,6];
 arr.slice(1,4) // [3, 4, 5] 取前不取后
 ```
 - splice() 主要作用向数组中插入项 改变原数组，返回的是删除的项数，没有删除则返回空数组
  - 删除，第一个参数是索引，从哪一项开始删除，第二个参数是删除项数(不传的话，只删除一项)
  ```
  const arr = ['a','b','c','d','e'];
  const re = arr.splice(2,3);
  console.log(arr); // ["a", "b"]
  console.log(re); // ["c", "d", "e"]
  ```
  - 插入，可以向指定位置插入任意数量的项，提供三个参数（起始位置、0（要删除的项数）
和要插入的项） 如果要插入多个项，可以再传入第四、第五，以至任意多个项
```
const colors = ["red", "green", "blue"];
const  removed = colors.splice(1, 0, "yellow", "orange"); // 从位置 1 开始插入两项
console.log(colors); // ["red", "yellow", "orange", "green", "blue"]
console.log(removed); // 返回的是一个空数组  如果没有删除任何
项，则返回一个空数组
```
 - 替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起
始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。
```
const colors = ["red", "green", "blue"];
const removed = colors.splice(1, 1, "red", "purple");
console.log(colors); // ["red", "red", "purple", "blue"]
console.log(removed); // ["green"]，返回的数组中只包含一项
```
- 位置方法 接收两个参数，第一个参数要查找的项，第二个参数是查找起点位置的索引，返回是所在的索引，若不存在则返回-1，用的是全等
  - indexOf()  
    ```
    const arr = [1,2,3,4,5,3,4];
    const re = arr.indexOf(3);
    console.log(arr); // [1, 2, 3, 4, 5, 3, 4]
    console.log(re);// 2 只会返回第一个查找到的索引

    const arr =[{name:'xiao', age: 13, run:'跑步', eat:'吃饭'}];
    const re = arr.indexOf({age:13})
    console.log(re);

    const moreArr = [{age:13}]
    const res = moreArr.indexOf({age:13})
    console.log(res) // -1


    const person = { name: "Nicholas" }; 
    const people = [{ name: "Nicholas" }]; 
    const morePeople = [person]; 
    console.log(people.indexOf(person)); //-1
    console.log(morePeople.indexOf(person)); //0 todo
    ```
  - lastIndexOf()
- 迭代方法
  - every() 对数组中的每一项运行给定函数，如果该函数对每一项都返回 true，则返回 true。
  ```
  const arr = [3,4,5,6,7,8]; 
  const re = arr.every((item) => {return item>1});
  console.log(arr); // 不会改变原数组
  console.log(re); // true  [0,4,5,6,7,8]---false
  ```
  - filter()：对数组中的每一项运行给定函数，返回该函数会返回 true 的项组成的数组。
  ```
  const numbers = [1,2,3,4,5,4,3,2,1]; 
  const filterResult = numbers.filter(function(item, index, array){ 
  return (item > 2); 
  }); 
  console.log(filterResult); //[3,4,5,4,3]
  ```
  - map()：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
  ```
  const numbers = [1,2,3,4,5,4,3,2,1]; 
  const mapResult = numbers.map(function(item, index, array){ 
    return item * 2; 
  }); 
  console.log(mapResult); //[2,4,6,8,10,8,6,4,2]
  ```
  - some()：对数组中的每一项运行给定函数，如果该函数对任一项返回 true，则返回 true。
  ```
  const numbers = [1,2,3,4,5,4,3,2,1];
  const someResult = numbers.some(function(item, index, array){ 
    return (item > 2); 
  }); 
  console.log(someResult); //true
  ```
  - forEach()，无返回值
  