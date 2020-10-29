####你知道vue中的key的作用和原理嘛？
-  源码中找答案： src\core\vdom\patch.js - updateChildren()
    - 向下遍历当前节点的整个孩子时，对每个孩子进行比较
    - 434行加断点，加条件断点，oldStartVnode.tag === 'p'，循环时，p有若干个，子元素也会触发
    ```
     while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx]
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        // 老开始和新开始相同，打补丁他们，游标同时向后移动
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
        oldStartVnode = oldCh[++oldStartIdx]
        newStartVnode = newCh[++newStartIdx]
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        // 老结束和新结束相同，打补丁，游标向前移动
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
        oldEndVnode = oldCh[--oldEndIdx]
        newEndVnode = newCh[--newEndIdx]
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        // 老开始和新结束相同，打补丁之外，还要移动节点
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
        // 移动到老的队伍后面
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
        oldStartVnode = oldCh[++oldStartIdx]
        newEndVnode = newCh[--newEndIdx]
    ```
    <!-- <image src='./image/使用key.png'> -->
    - 如果不使用key，由于没有key，不知道当前在更新谁，只能一步一步，见着就更新，见着就更新，首先更新a，再更新b，认为是自己，将f内容更新到c上，以此类推，最后将e追加，一共执行了5次更新，1次追加操作
    - 如果使用key，前两次一样，首尾假猜策略，先比较首发现不相同，再比较尾，发现相同，第三次 patch的是e，第四次patch  d，第五次patch c，最后将f追加到c前面。五次patch，一次追加，更新没有dom操作
    - 调试源码，
        - 没有key时候：都会走到 老的开头和新的开头相同，因为key都是undefined，强制做更新打补丁
        - 有key时候，走的是 老的结束和新的结束，没有更新，直到循环结束，才开始将f插入到c的前面 
- 结论
    - 首先，key的主要作用是高效的更新我们的虚拟dom，其原理是我可以通过源码的方式给您解释，曾经看到源码，在patch的过程中，会执行patchVnode，过程中会执行updateChildren 方法，会更新两个新旧的元素，在这个过程中可以通过key精准的判断两个节点是否是同一个，如果没有key的话，判断是同一个节点，只能强硬的去更新，这样没有办法避免更新操作dom，性能会很差，如果加上key，会进行一系列的优化算法，比如会进行首尾元素比较，元素不会发生大量的结构变化，所以会高效的结束循环，会减少大量的更新，操作会非常高效
    - 另外，如果不设置key，还可能在列表中更新时引发一些隐藏的bug，不该更新的更新了，该更新的没有更新
    - vue中在使用相同标签名元素的过度切换时，也会使用key属性，其目的也是为了让vue可以区分它们，否则vue只会替换其内部属性而不会触发动画效果
