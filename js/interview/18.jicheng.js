class Counter {
    #number = 10
    increment() {
        this.#number++
    }
    getNum() {
        return this.#number
    }
}

const counter = new Counter()
counter.increment()

console.log(counter.#number); // SyntaxError

// ES2020中 通过# 我们可以给class添加私有变量。在class的外部我们无法获取该值，所以报错