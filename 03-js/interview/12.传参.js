const myFunc = ({
  x,
  y,
  z
}) => {
  console.log(x, y, z);
}
myFunc(1, 2, 3) //undefined undefined undefined
myFunc({
  x: 1
}, 2, 3)
// 1 undefined undefined

// 事件传播的单个阶段
// 捕获》目标》冒泡