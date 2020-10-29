#### v-if和v-for哪个优先级更高？ 如果两个同时出现，应该怎么优化得到更好的性能？
- 源码中找答案
    - src\compiler\codegen\index.js
    ```
        if (el.staticRoot && !el.staticProcessed) {
            return genStatic(el, state)
        } else if (el.once && !el.onceProcessed) {
            return genOnce(el, state)
        } else if (el.for && !el.forProcessed) {
            return genFor(el, state)  for优先级大于if
        } else if (el.if && !el.ifProcessed) {
            return genIf(el, state)
        } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
            return genChildren(el, state) || 'void 0'
        } else if (el.tag === 'slot') {
            return genSlot(el, state)
    ```
- 做测试
```
1)<p v-for="child in children" v-if="isFolder">{{child.title}}</p>
2)<template v-if='isFolder'>
    <p v-for="child in children">{{child.title}}</p>
</template>
1) render
(function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('h1',[_v("v-if和v-for哪个优先级更高？ 如果两个同时出现，应该怎么优化得到更好的性能")]),_v(" "),_l((children),function(child){return (isFolder)?_c('p',[_v(_s(child.title))]):_e()})],2)}
})
isFolder判断条件在for循环的里面，每次循环都会执行判断条件
2) render
(function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('h1',[_v("v-if和v-for哪个优先级更高？ 如果两个同时出现，应该怎么优化得到更好的性能")]),_v(" "),(isFolder)?_l((children),function(child){return _c('p',[_v(_s(child.title))])}):_e()],2)}
})
isFolder判断条件在循环外面，如果条件不符合，返回空，提高性能
```
- 结论
    - 显然v-for优先于v-if被解析，我自己写了一个测试，在源码中也找到了答案，会影响最后的渲染结果
    - 如果同时出现，每次循环都会先执行循环再判断条件，无论如何循环都不可避免，浪费了性能
    - 要避免这种情况出现，可以把条件写在外面判断，如果把条件写到外围，会先判断条件，再尝试看看是否需要循环，这样有可能避免循环
    - 如果项中有条件，不得不在内部做循环，可以用计算属性对整个数组做一个过滤，需要渲染都留下，给模板提供的数组应该就是要渲染的数据，因为render会频繁的执行
