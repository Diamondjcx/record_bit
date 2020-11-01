var preorderTrvaelsal1 = function(root, arr=[]) {
    if (root) {
        // 先处理自己，再处理左右
        arr.push(root.val)
        preorderTrvaelsal1(root.left, arr)
        preorderTrvaelsal1(root.right, arr)
    }
    return arr
}
// 迭代
var preorderTrvaelsal = function(root, arr=[]) {
    // 1.开始遍历 有一个stack存储
    // left入栈 直到left为空
    // 节点出栈，右孩子为目标节点
    let result = [];
    let stack = []
    let cur = root
    while(cur || stack.length>0) {
        while(current) {
            result.push(current.val)
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        current = current.right
    }
    return result
}