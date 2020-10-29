console.log('running index.js');
import {
  sum
} from './sum'
console.log(sum(1, 2));


// running sum.js, running index.js , 3


console.log('running index.js');
const {
  sum
} = require('./sum')
console.log(sum(1, 2));

//  running index.js, running sum.js, 3


// import 命令是编译阶段执行的，在代码运行之前，因此这意味着被导入的模块会先运行，而导入模块的文件会后执行

// 这是CommonJs中require() 和import之间的区别。
// 使用require(), 可以在运行代码时根据需要加载依赖项， 如果我们使用require而不是import， running index.js, running sum.js, 3 会被依次打印