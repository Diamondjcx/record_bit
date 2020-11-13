##### 你了解哪些 Vue 性能优化方法？
- 路由懒加载 体积缩减，按需加载
```
const router = new VueRouter({
routes: [
 { path: '/foo', component: () =>
import('./Foo.vue') } ]
})
```
- keep-alive 缓存页面
```
<template>
<div id="app">
<keep-alive>
<routerview/> </keepalive>
</div>
</template>
```
- 使用 v-show 复用 DOM
```
<template>
<div class="cell">
<!--这种情况用 v-show 复用 DOM，比 v-if 效果好
--> <div v-show="value" class="on">
<Heavy :n="10000"/>
</div>
<section v-show="!value" class="off">
<Heavy :n="10000"/>
</section>
</div>
</template>
```
- v-for 遍历避免同时使用 v-if
```
<template>
    <ul>
        <li
            v-for="user in activeUsers"
            :key="user.id">
            {{ user.name }}
        </li>
    </ul>
</template>
<script>
 export default {
    computed: {
        activeUsers: function () {
        return this.users.filter(function (user) 
        { return user.isActive
        })
        }
    }
 }
</script>
```
- 长列表性能优化
    - 如果列表是纯粹的数据展示，不会有任何改变，就不需要做响应化
```
export default {
    data: () => ({
        users: []
    }),
    async created() {
        const users = await
        axios.get("/api/users"); this.users =
        Object.freeze(users);
    }
};
```
- 如果是大数据长列表，可采用虚拟滚动，只渲染少部分区域的内容
```
<recycle-scroller
class="items"
:items="items"
:item-size="24"
>
    <template vslot="{ item }"> <FetchIte
        mView
        :item="item"
        @vote="voteItem(item)"
        />
    </template>
</recycle-scroller>
```
    > 参考 vue-virtual-scroller、vue-virtual-scroll-list
- 事件的销毁
    - Vue 组件销毁时，会自动解绑它的全部指令及事件监听器，但是仅限于组件本身的事件。
    ```
    created() {
        this.timer = setInterval(this.refresh, 
    2000) },
    beforeDestroy() {
        clearInterval(this.timer)
    }
    ```
- 图片懒加载：对于图片过多的页面，为了加速页面加载速度，所以很多时候我们需要将页面内未出现在可视区域 内的图片先不做加载， 等到滚动到可视区域后再去加载。
```
<img v-lazy="/static/img/1.png">
vue-lazyload
```
- 第三方插件按需引入
    - 像 element-ui 这样的第三方组件库可以按需引入避免体积太大。
    ```
    import Vue from 'vue';
    import { Button, Select } from 'element-ui';
    Vue.use(Button)
    Vue.use(Select)
    ```
- 无状态的组件标记为函数式组件
```
<template functional> 
    <div class="cell">
        <div v-if="props.value"
        class="on"></div> <section v-else
        class="off"></section>
    </div>
</template>
<script>
    export default {
    props: ['value'] }
</script>
```

- 子组件分割
```
<template>
    <div>
    <ChildComp/>
    </div>
</template>
<script>
    export default {
        components: {
            ChildComp: {
            methods: {
                heavy () { /* 耗时任务 */ }
                },
            render (h) {
                return h('div', 
                this.heavy()) 
            }
            }
        } 
    }
</script>
```
- 变量本地化
```
<template>
<div :style="{ opacity: start / 300 }">
 {{ result }}
</div>
</template>
```
- SSR