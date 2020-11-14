function curry (fn, ...args) {
    return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args)
}


function curry(fn, ...args) {
    return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args)
}