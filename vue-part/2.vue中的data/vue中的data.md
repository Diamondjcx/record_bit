#### Vue组件data为什么必须是个函数，而Vue的根实例则没有此限制？
- 源码中找答案 src\core\instance\state.js -initData() 先是创建组件构造函数
- src\core\util\options.js  合并选项做校验
```
strats.data = function (
  parentVal: any,
  childVal: any,
  vm?: Component
): ?Function {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      )

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
}

```
```
function initData (vm: Component) {
  let data = vm.$options.data
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {}
  if (!isPlainObject(data)) {
    data = {}
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    )
  }
```
    - 函数每次执行都会返回全新data对象实例,如果使用的是
```
vue.js:634 [Vue warn]: The "data" option should be a function that returns a per-instance value in component definitions.
```
- 结论：组件需要的是函数，vue实例可以不需要函数
    - Vue组件中可能存在很多个实例，如果使用对象形式定义data，则会导致它们共用一个data对象，状态会产生污染，一个状态变更会影响所有组件实例，这是不合理的；
    - 采用函数去定义，每次创建组件实例的时候都会执行initData，在initData时会将其作为工厂函数返回全新的data对象，引用不同，有效的规避多实例之间状态污染的问题，
    - 根实例不存在这个问题，也是因为根实例只能有1个，不需要担心这件事
    - 曾经看源码的时候，看过数据初始化那块，我发现它会检测data的类型，从而具体执行它的执行方式，另外的话，由于根实例在创建的时，在合并选项的时候，它会有实例拿到，只有根实例才会有，可以躲过data选项的校验，而如果是一个普通的组件的话，由于它当时不存在实例，所以没办法躲过那个校验 if逻辑，所以会直接被检测是否是data的类型，无法跳过
    - 一个组件中可能会有多个组件实例，Vue.component()只会创建一次，如果data是对象的话，每个组件实例都会指向这个地址，会造成污染