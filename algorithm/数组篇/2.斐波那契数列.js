let fib = function (N) {
    let cache = [];
    for (let i =0; i<=N; i++) {
        if (i ==0 || i===1) {
            cache[i]=i
        } else {
            cache[i]= cache[i-1] + cache[i-2]
        }
    }
    return cache[N]
}

console.log(fib(10));