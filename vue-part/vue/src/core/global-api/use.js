/* @flow */

import { toArray } from '../util/index'

export function initUse (Vue: GlobalAPI) {
  // USE方法接收函数或者对象
  // Vue.use(KVueRouter)
  // Vue.use(KVuex)  {Store, install}
  Vue.use = function (plugin: Function | Object) {
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    const args = toArray(arguments, 1)
    // 在参数数组最前面放入Vue构造函数
    args.unshift(this)
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    installedPlugins.push(plugin)
    return this
  }
}
