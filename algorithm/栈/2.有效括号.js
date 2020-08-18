// 给定一个只包括 '(' ，')' ，'{' ，'}' ，'[' ，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:

// 输入: "()"
// 输出: true


var isValid = function (s) {
  let map = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i])
    } else if (s[i] !== map[stack.pop()]) {
      return false
    }
  }
  return stack.length === 0
};