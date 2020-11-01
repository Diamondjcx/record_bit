var detectCycle = function (head) {
    // 使用对象Map也可
    let cache = new Set();
    while(head) {
        if (cache.has(head)) {
            return head
        } else {
            cache.add(head)
        }
        head = head.next
    }
    return null
}


var detectCycle = function (head) {
    let slow = head
    let fast = head
    let start = head
    while(fast && fast.next) {
     fast = fast.next.next
     slow = slow.next
     if (fast === slow)   {
         while(slow && start) {
            if (slow === start) {
                return slow
            }
            slow = slow.next
            start = start.next
         }
     }
    }
    return null
 }
 