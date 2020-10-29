console.log(`${(x=>x)('I love')} china`);
//I love china

// 自执行函数,I love是传递进去的参数，并返回，然后再拼接china
(x => x)('I love')