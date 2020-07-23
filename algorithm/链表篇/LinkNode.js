// 动态数据结构  删除增加不需要更改顺序结构，减少复杂度
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}
class LinkNodeList {
    constructor() {
        // 链表相关操作
        this.head = null
        this.length = 0
    }
    // 增加
    append(element) {
        let node = new Node(element)
        let cur

        // 两种情况  1.链表是空的 2.不是空的
        if (this.head === null) {
            this.head = node
        } else {
            // 遍历链表
            cur = this.head
            while(cur.next) {
                cur = cur.next
            }
            cur.next = node
        }
        this.length +=1
    }
    removeAt(index) {
        // 上一个节点指向下一个节点，把自己的下一个节点指向取消
        let cur = this.head
        let prev
        let i =0
        if (index ===0) {
            // 删除第一项
            this.head = cur.next
        } else {
            while(i<index) {
                // 上一个和当前的都要保存
                prev = cur
                cur = cur.next
                i++
            }
            prev.next = cur.next
            cur.next = null
        }
        this.length -=1
        return cur.element
    }
    print() {
        let cur = this.head
        let ret = []
        while(cur) {
            ret.push(cur.element)
            cur = cur.next
        }
        console.log(ret.join('=>'))
        return ret.join('=>')
    }
}

let linkNode = new LinkNodeList()

linkNode.append('哈喽')
linkNode.append('你愁啥')
linkNode.append('瞅你咋地')
linkNode.append('嘿嘿')
linkNode.print()
linkNode.removeAt(1)
linkNode.print()

// console.log(1);