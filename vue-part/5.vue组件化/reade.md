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
