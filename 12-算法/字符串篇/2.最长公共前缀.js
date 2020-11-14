// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。


// 解法一：逐个比较
// 解题思路： 从前往后依次比较字符串，获取公共前缀

var longestCommonPrefix = function (strs) {
  if (strs === null || strs.length === 0) return "";
  let prevs = strs[0]
  for (let i = 1; i < strs.length; i++) {
    let j = 0
    for (; j < prevs.length && j < strs[i].length; j++) {
      if (prevs.charAt(j) !== strs[i].charAt(j)) break
    }
    prevs = prevs.substring(0, j)
    if (prevs === "") return ""
  }
  return prevs
};