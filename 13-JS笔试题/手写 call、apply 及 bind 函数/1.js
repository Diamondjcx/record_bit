


Function.prototype.myCall = function(context) {
     
    if (typeof this !== 'function') {
        console.log('类型错误')
    }

    // 获取参数 参数不固定
    let args = [...arguments].slice(1)
    // 函数有返回值
    let result = null

    // 判断context是否传入，未传入则设置window
    context = context || window;

    // 获取调用call的函数，用this获取，未改变this之前，this指向的函数本身
    context.fn = this;

    // 调用函数，获取返回值
    result = context.fn(...args)

    // 将属性进行删除
    delete context.fn;
    // 将返回值返回
    return result;
}

Function.prototype.myCall = function(context) {
    // this指的是函数
    if (typeof this !=='function') {
        console.error("type error");
    }

    let args = [...arguments].slice(1),
        result = null;
    context = context || window;
    context.fn = this
    result = context.fn(...args)
    delete context.fn
    return result
}


Function.prototype.myCall = function(context) {
    if (typeof this !== 'Function') {
        console.log('type error');
    }
    const args = [...arguments].slice(1),
        result = null;
    context = context || window
    context.fn = this
    result = context.fn(...args)
    delete context.fn;
    return result
}


Function.prototype.myApply = function(context) {
    if (typeof this !== 'Function') {
        console.log('type error')
    }

    let result = null

    context = context || window
    context.fn = this
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }

    delete context.fn 
    return result
}


Function.prototype.myApply= function(context) {
    if (typeof this !=='Function') {
        console.log('type error');
    }

    let result = null
    context = context || window

    context.fn = this
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}


Function.prototype.myBind = function () {
    if (typeof this !=='Funciotn') {
        console.log('error')
    }
    let args = [...arguments].slice(1),
        fn = this;
    return function Fn () {
        return fn.apply(
            this instanceof Fn ? this:context,
            args.concat(...arguments)
        )
    }
}

Function.prototype.myBind = function() {
    if (typeof this !=='Function') {
        console.log('error');

    }
    let args = [...arguments].slice(1);
    let fn = this;
    return function Fn () {
        return fn.apply(
            this instanceof Fn ? this : context,
            args.concat(...arguments)
        )
    }
}