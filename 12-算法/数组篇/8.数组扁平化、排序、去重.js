// 已知如下数组：var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

var arr = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
]
// 扁平化
let flatArr = arr.flat(4)
//扁平化2 转化成字符串
let flatArr1 = arr.toString().split(',').map(item => parseFloat(item))

let flatArr2 = JSON.stringify(arr).replace(/(\[|\])/g, '').split(',').map(item => parseFloat(item))

// 去重
let disArr = Array.from(new Set(flatArr))
// 排序
let result = disArr.sort(function (a, b) {
  return a - b
})
console.log(result)