var maxDepth = function() {
    if (root===null) {
        return 0
    } 
    return Math.max(maxDepth(root.left), maxDepth(root.rigth))
}