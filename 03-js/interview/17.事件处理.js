<div onClick='console.log("div")'>
    <p onClick='console.log("p")'></p>
</div>
// p div

事件传播期间有三个阶段：捕获，目标和冒泡
默认情况下，事件处理程序在冒泡阶段执行（除非userCapture设置为true），它从最深的嵌套元素向外延伸