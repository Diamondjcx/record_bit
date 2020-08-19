const add = x=>y=>z=> {
    console.log(x,y,z) // 4,5,6
    return x+y+z
}
add(4)(5)(6) 

// 函数add是一个返回 返回箭头函数的箭头函数 
// 第一个函数接收一个值为4的参数x
// 我们调用第二个函数，它接收一个值为5的参数y
// 然后我们调用第三个函数，它接收一个值为6的参数z
// 当我们尝试在最后一个箭头函数中获取x,y,z的值，JS引擎根据作用域链去找x,y的值，得到4,5,6


const shape ={
    radius: 10,
    diameter() {
        return this.radius *2
    },
    perimeter: ()=>2*Math.PI * this.radius
}
console.log(shape.diameter())  // 20 
console.log(shape.perimeter()) // NaN  箭头函数中this不是指向shape对象，指向的是window
