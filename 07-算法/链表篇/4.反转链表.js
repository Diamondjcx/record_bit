// 输入 1->2->-3->-4
// 输出 4->3->2->1
var reverseList = function(head) {
    let cur = head
    let prev = null
    while(cur!==null) {
        [cur.next,prev,cur] = [prev, cur, cur.next];
        // let next = cur.next;
        // cur.next = prev
        // prev = cur
        // cur = next
    }
}

