//  问题
//  给定两个数组， 编写一个函数来计算它们的交集。

//  输入: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
//  输出: [2]

//  输入: nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
//  输出: [9, 4]


//  结题
//  解题思路：
//  filter 过滤
//  Set 去重
//  代码实现：

var intersection = function (nums1, nums2) {
  return [...new Set(nums1.filter((item) => nums2.includes(item)))]
};