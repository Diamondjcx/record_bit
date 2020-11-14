const simplifyPath = function (path) {
    let stack = [];
    let paths = path.split('/')
    for(let i =0, len=paths.length; i<len; i++) {
        const p = paths[i];
        if (p==='..') {
            stack.pop()
        } else if (p && p!=='.') {
            stack.push(p)
        }
    }
    return '/'+ stack.join('/')
}

// const r = simplifyPath('/home/') //home
const r = simplifyPath('../home/')
console.log(r);


