async function getData() {
    return awiat Promise.resolve('I made it')
}
const data = getData()
console.log(data);
// Promise {<pending>}

// 异步函数始终返回一个promise。awiat仍然需要等待promise的解决
// 当我们调用getData()并将其赋值给data，此时data为getData方法返回的一个挂起的promise，
// 该promise并没有解决
// 如果想要访问已解决的值"I made it" 可以在data上使用.then()方法
// data.then(res=>console.log(res))



async function* range(start, end) {
    for(let i =start; i<=end; i++) {
        yield Promise.resolve(i)
    }

}

(
    async () => {
        const gen = range(1,3)
        console.log('gen', gen);
        for await(const item of gen) {
            console.log(item); // 1,2,3
        }
    }
)()