### Object类型
#### 创建对象
- 一般使用对象字面量创建
- 访问对象，使用点语法或者方括号，方括号可以访问变量，推荐使用点语法

```
const object1 = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

> "a: somestring"
> "b: 42"
```


console.log(`${(x=>x)('I love')} china`);