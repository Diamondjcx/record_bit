#### 谈一谈组件化的理解
- 回答问题思路：
    - 组件化定义（什么是组件化）、优点（为什么要用组件化呢？）、使用场景，使用技巧和在工作中注意事项等方面展开陈述，同时要强调vue中组件化的一些特点
- 源码分析1：组件定义  把一些独立的功能模块单独提出来，切分为更小块，独有的逻辑，更好的实现复用
```
        Vue.component('comp',{
            template:'<div @click="counter++">{{counter}}</div>', // 有时候会直接写render
            data() {
                return {
                    counter:0
                }
            }
        })
```
    - 组件定义， \src\core\global-api\assets.js
```js
<template>
 <div>
    this is a 
    component 
</div>
</template>
vue-loader 会编译 template 为 render 函数，最终导出的依然是组件配置对象。
```
- 源码分析 2：组件化优点
    
```
    lifecycle.js - mountComponent()
    组件、Watcher、渲染函数和更新函数之间的关系
```
- 源码分析 3：组件化实现
```
构造函数，src\core\global-api\extend.js
实例化及挂载，src\core\vdom\patch.js - createElm()
```

##### 总结
```
1. 组件是独立和可复用的代码组织单元。组件系统是 Vue 核心特性之一，它使开发者使用小型、 独立和通常可复用的组件构建大型应用；
2. 组件化开发能大幅提高应用开发效率、测试性、复用性等； 开课吧 web 全栈架构师
3. 组件使用按分类有：页面组件、业务组件、通用组件；
4. vue 的组件是基于配置的，我们通常编写的组件是组件配置而非组件，框架后续会生成其构造函
数，它们基于 VueComponent，扩展于 Vue； 5. vue 中常见组件化技术有：属性 prop，自定义事件，插槽等，它们主要用于组件通信、扩展等； 6. 合理的划分组件，有助于提升应用性能；
7. 组件应该是高内聚、低耦合的；
8. 遵循单向数据流的原则
```