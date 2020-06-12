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