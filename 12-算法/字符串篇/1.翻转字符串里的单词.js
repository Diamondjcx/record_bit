// 输入: "the sky is blue"
// 输出: "blue is sky the"

// 解法一：正则 + JS API
var reverseWords = function (s) {
  return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ')
};
// 解法二：双端队列（不使用 API）
// 双端队列，故名思义就是两端都可以进队的队列

// 解题思路：

// 首先去除字符串左右空格
// 逐个读取字符串中的每个单词，依次放入双端队列的对头
// 再将队列转换成字符串输出（已空格为分隔符）

var reverseWords = function (s) {
  let left = 0
  let right = s.length - 1
  let queue = []
  let word = ''
  while (s.charAt(left) === ' ') left++
  while (s.charAt(right) === ' ') right--
  while (left <= right) {
    let char = s.charAt(left)
    if (char === ' ' && word) {
      queue.unshift(word)
      word = ''
    } else if (char !== ' ') {
      word += char
    }
    left++
  }
  queue.unshift(word)
  return queue.join(' ')
};