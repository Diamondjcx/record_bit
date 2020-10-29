/* @flow */

import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)

// 调用工厂函数获取web平台特有的patch函数
// nodeOps：节点操作
// modules：元素属性操作
export const patch: Function = createPatchFunction({ nodeOps, modules })
