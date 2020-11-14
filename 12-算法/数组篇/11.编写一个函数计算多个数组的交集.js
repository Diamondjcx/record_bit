// 编写一个函数计算多个数组的交集
// 输出结果中的每个元素一定是唯一的
var intersection = function (...args) {
  if (args.length === 0) {
    return []
  }
  if (args.length === 1) {
    return args[0]
  }
  return [...new Set(args.reduce((result, arg) => {
    return result.filter(item => arg.includes(item))
  }))]
};

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [2, 3, 4, 5, 6, 7, 8];
const arr3 = [3, 4, 5, 6, 7, 8, 9];

const result = intersection(arr1, arr2, arr3)
console.log(result);