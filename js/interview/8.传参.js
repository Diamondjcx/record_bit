function checkAge(data) {
  if (data === {
      age: 18
    }) {
    console.log('You are an adult');
  } else if (data == {
      age: 18
    }) {
    console.log('You are still an adult');
  } else {
    console.log('Hmm.. ');
  }
}

checkAge({
  age: 18
})

// 比较相等性，原始类型通过它们的值进行比较，而对象通过它们的引用进行比较，JavaScript检查对象是都具有对内存中相同位置的引用
// 我们作为参数传递的对象和我们用于检查相等性的对象在内存中位于不同位置，所以它们引用是不同的