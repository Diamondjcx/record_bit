// var hasCycle = function (head) {
//     let count = 1 
//     while(head) {
//         if (count > 1000) {
//             return true
//         }
//         count+=1
//         head = head.next
//     }
//     // 遍历结束
//     return false
// }

var hasCycle = function (head) {
    // 使用对象Map也可
    let cache = new Set();
    while(head) {
        if (cache.has(head)) {
            return true
        } else {
            cache.add(head)
        }
        head = head.next
    }
    return false
}


var hasCycle = function (head) {
   let slow = head
   let fast = head
   while(fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow)   {
        return true
    }
   }
   return false
}
