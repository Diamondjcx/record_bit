// 字符串相加
// 给定两个字符串形式的非负整数 num1 和 num2 ，计算它们的和。

// 例如：

// "111" + ”2222“ = ”2333“

// 注意：

// num1 和 num2 的长度都小于 5100
// num1 和 num2 都只包含数字 0-9
// num1 和 num2 都不包含任何前导零
// 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式

// 解答：从低位开始相加
// 从 num1 ，num2 的尾部开始计算，模拟人工加法，保存到 tmp 中；

// 计算 tmp 的个位数，并添加到 result 的头部，这里的 result 是 string 类型，不是 number 类型；

// 计算进位，改成 tmp，进行下次循环

// 索引溢出处理：循环结束，根据 tmp 判断是否有进位，并在 result 头部添加进位 1

// 返回 result

// 代码实现：

var addStrings = function (num1, num2) {
  let a = num1.length,
    b = num2.length,
    result = '',
    tmp = 0
  while (a || b) {
    a ? tmp += +num1[--a] : ''
    b ? tmp += +num2[--b] : ''

    result = tmp % 10 + result
    if (tmp > 9) tmp = 1
    else tmp = 0
  }
  if (tmp) result = 1 + result
  return result
};
// 复杂度分析：

// 时间复杂度 O(max(M, N))
// 空间复杂度 O(1)