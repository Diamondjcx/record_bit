var invertTree = function() {
    // 递归
    // 终止条件
    if (root==null) {
        return root
    } 
    [root.left, root.right] = [invertTree(root.right),invertTree(root.left)]
}