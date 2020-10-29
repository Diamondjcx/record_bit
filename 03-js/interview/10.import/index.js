import * as data from './module'
console.log(data);
// {
//   default:function default(), name:'Lydia'
// }

// es6的语法 导入
// import * as name 语法，我们将module.js 文件中所有export 导入到index.js文件中，并且创建了一个名为data的新对象
// 在modul.js文件中，有两个导出，默认导出和命名导出。
// data对象具有默认导出的default属性，其它属性具有指定exports的名称及其对应的值


// 2、怎么样才能在index.js中调用sum.js中的sum
import * as sum from './sum'
sum.default(4)   
// 解释同上