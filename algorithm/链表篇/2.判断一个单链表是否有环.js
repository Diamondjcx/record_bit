// 给定一个链表，判断链表中是否有环。

// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环

// 示例一
// 输入：head = [3,2,0,-4], pos = 1
// 输出：true
// 解释：链表中有一个环，其尾部连接到第二个节点。


// 示例二
// 输入：head = [1,2], pos = 0
// 输出：true
// 解释：链表中有一个环，其尾部连接到第一个节点。

// 示例三
// 输入：head = [1], pos = -1
// 输出：false
// 解释：链表中没有环。


// 解法一：标志法
// 给每个已遍历过的节点加标志位，遍历链表，当出现下一个节点已被标志时，则证明单链表有环

let hasCycle = function (head) {
  while (head) {
    if (head.flag) return true
    head.flag = true
    head = head.next
  }
  return false
};
// 时间复杂度：O(n)

// 空间复杂度：O(n)

// 解法二：利用 JSON.stringify() 不能序列化含有循环引用的结构
let hasCycle = function (head) {
  try {
    JSON.stringify(head);
    return false;
  } catch (err) {
    return true;
  }
};
// 时间复杂度：O(n)

// 空间复杂度：O(n)



// 解法三：快慢指针（双指针法）
// 设置快慢两个指针，遍历单链表，快指针一次走两步，慢指针一次走一步，如果单链表中存在环，则快慢指针终会指向同一个节点，否则直到快指针指向 null 时，快慢指针都不可能相遇

let hasCycle = function (head) {
  if (!head || !head.next) {
    return false
  }
  let fast = head.next.next,
    slow = head.next
  while (fast !== slow) {
    if (!fast || !fast.next) return false
    fast = fast.next.next
    slow = slow.next
  }
  return true
};
// 时间复杂度：O(n)

// 空间复杂度：O(1)