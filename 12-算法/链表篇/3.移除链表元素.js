// 哈喽=>你愁啥=>瞅你咋地=>嘿嘿
// value = 2
// 哈喽=>瞅你咋地=>嘿嘿


var removeElements = function(head, val) {
    // a=>b=>c=>d
    // 链表的修改，是不是第一个  逻辑不同
    // 哨兵=>a=>b=>c=>d

    let ele = {
        next: head
    }
    let cur = ele 
    while(cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }

    }
    return ele.next
}