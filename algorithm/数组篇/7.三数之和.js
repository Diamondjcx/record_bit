// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a ，b ，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意： 答案中不可以包含重复的三元组。

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]


// 解题思路： 先数组排序，排序完后遍历数组，以 nums[i] 作为第一个数 first ，以 nums[i+1] 作为第二个数 second ，将 nums[nums.length - 1] 作为第三个数 last ，判断三数之和是否为 0 ，

// <0 ，则 second 往后移动一位（nums 是增序排列），继续判断
// >0 ，则 last 往前移动一位（nums 是增序排列），继续判断
// ===0 ，则进入结果数组中，并且 second 往后移动一位， last 往前移动一位，继续判断下一个元组
// 直至 second >= last 结束循环，此时， nums[i] 作为第一个数的所有满足条件的元组都已写入结果数组中了，继续遍历数组，直至 i === nums.length - 2 (后面需要有 second 、 last )

var threeSum = function (nums) {
  if (!nums || nums.length < 3) return []
  let result = [],
    second, last
  // 排序
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break
    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) continue
    second = i + 1
    last = nums.length - 1
    while (second < last) {
      const sum = nums[i] + nums[second] + nums[last]
      if (!sum) {
        // sum 为 0
        result.push([nums[i], nums[second], nums[last]])
        // 去重
        while (second < last && nums[second] === nums[second + 1]) second++
        while (second < last && nums[last] === nums[last - 1]) last--
        second++
        last--
      } else if (sum < 0) second++
      else if (sum > 0) last--
    }
  }
  return result
};