const myPromise = Promise.resolve(Promise.resolve())

function funcOne() {
  myPromise.then(res => res).then(res => console.log)
  setTimeout(() => {
    console.log('Timeout!')
  }, 0);
  console.log('Last line!')
}

async function funcTwo() {
  const res = awiat myPromise;
  console.log(await res)
  setTimeout(() => {
    console.log('Timeout!');
  }, 0);
  console.log('Last line~');
}

funcOne()
funcTwo()