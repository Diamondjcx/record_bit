// 给你一个字符串 s，「k 倍重复项删除操作」将会从 s 中选择 k 个相邻且相等的字母，并删除它们，使被删去的字符串的左侧和右侧连在一起。

// 你需要对 s 重复进行无限次这样的删除操作，直到无法继续为止。

// 在执行完所有删除操作后，返回最终得到的字符串。

// 本题答案保证唯一。


// 示例 1：

// 输入：s = "abcd", k = 2
// 输出："abcd"
// 解释：没有要删除的内容。
// 示例 2：

// 输入：s = "deeedbbcccbdaa", k = 3
// 输出："aa"
// 解释： 
// 先删除 "eee" 和 "ccc"，得到 "ddbbbdaa"
// 再删除 "bbb"，得到 "dddaa"
// 最后删除 "ddd"，得到 "aa"
// 示例 3：

// 输入：s = "pbbcggttciiippooaais", k = 2
// 输出："ps"

// 提示：

// 1 <= s.length <= 10^5
// 2 <= k <= 10^4
// s 中只含有小写英文字母。


// 解答：利用栈
// 解题思想： 遍历字符串依次入栈，入栈时，判断当前元素与栈头元素是否一致，如果不一致则入栈，如果一致，判断栈头字符是否长度为 k - 1 ，如果为 k-1 ，即加入该字符时，满足连续相同字符 k 个，此时，需要栈头出栈，当前字符不进栈，如果小于 k-1 ，则取出栈头字符，加上当前字符，重新入栈

// 代码实现：

var removeDuplicates = function (s, k) {
  let stack = []
  for (let c of s) {
    let prev = stack.pop()
    if (!prev || prev[0] !== c) {
      stack.push(prev)
      stack.push(c)
    } else if (prev.length < k - 1) {
      stack.push(prev + c)
    }
  }
  return stack.join('')
};