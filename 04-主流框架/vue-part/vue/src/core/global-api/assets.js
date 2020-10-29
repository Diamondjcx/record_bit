/* @flow */

import { ASSET_TYPES } from 'shared/constants'
import { isPlainObject, validateComponentName } from '../util/index'

export function initAssetRegisters (Vue: GlobalAPI) {
  /**
   * Create asset registration methods.
   */
  // ['component','filter','directive']
  ASSET_TYPES.forEach(type => {
    // Vue[component] = function(){}
    // Vue.component(id, {})
    Vue[type] = function (
      id: string,
      definition: Function | Object
    ): Function | Object | void {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && type === 'component') {
          validateComponentName(id)
        }

        // definition是组件配置对象
        if (type === 'component' && isPlainObject(definition)) {
          // 声明组件名称
          definition.name = definition.name || id
          // Vue.extend({})，生成组件构造函数
          definition = this.options._base.extend(definition)
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition }
        }
        // options.components = Ctor
        // 其他组件初始化时会选项合并，此时这里声明的内容就会出现在自定义组件中
        this.options[type + 's'][id] = definition
        return definition
      }
    }
  })
}
