// [1,1,2,3,5,8,13,21]

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


// 创建数列，假如传入的n是12，n是索引，前两项是1和1，剩下的循环n+1-2次，后一项的值都为前两项的和
function fibnacci(n) {
    if (n<=1) return 1;
    let arr = [1,1];
    let i = n+1-2; // 剩下的循环多少次,创建多少个
    while(i>0) {
        let a = arr[arr.length-2]
        let b = arr[arr.lengt-1]
        arr.push(a+b)
        i--
    }
    return arr[arr.length-1]
}


fibnacci(5)