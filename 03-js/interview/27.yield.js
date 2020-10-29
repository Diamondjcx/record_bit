function* startGame() {
  const answer = yield 'Do you love JavaScript?'
  if (answer !== 'Yes') {
    return 'Oh wow... Guess'
  }
  return 'JavaScript loves you back'
}
const game = startGame();
console.log(game.next().value); // Do you love JavaScript
console.log(game.next('Yes').value); // JvavScript loves you back


// generator 函数在遇到yield关键字试会暂停其执行
// 需要让函数产生字符串Do you love JavaScript.可以通过调用game.next().value来完成
// 上述函数的第一行就有一个yield关键字， 那么运行立即停止， yield表达式本身没有返回值， 或者总是返回undefined
// next方法可以带一个函数， 该参数会被当做上一个yield表达式的返回值。 当我们调用game.next('Yes').value时， 先前的yield的
// 返回值将被替换为传递给next() 函数的参数 'Yes'