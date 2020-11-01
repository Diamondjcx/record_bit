// 实现一个函数，判断输入是不是回文字符串
// 'abccba'


// 解法一：使用API
function isPlalindrome(input) {
  if (typeof input !== 'string') return false;
  return input.split('').reverse().join('') === input;
}
// 解法二：不使用API
function isPlalindrome(input) {
  if (typeof input !== 'string') return false;
  let i = 0,
    j = input.length - 1
  while (i < j) {
    if (input.charAt(i) !== input.charAt(j)) return false
    i++
    j--
  }
  return true
}