[[0,1],[2,3]].reduce((acc, cur) => {
    return acc.concat(cur)
}, [1,2])
// [1,2,0,1,2,3]
// [1,2]是我们的初始值