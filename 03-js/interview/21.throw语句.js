function greeting() {
  throw "Hello word!"
}

function sayHi() {
  try {
    const data = greeting(); // 报错之后，后面的代码不会再执行
    console.log('It worked!', data);
  } catch (error) {
    console.log('Oh no an error', error)
  }
}
sayHi() // Oh no an error Hello word!