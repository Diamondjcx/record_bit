const settings = {
  username: 'lydiahallie',
  level: 19,
  health: 90
}
const data = JSON.stringify(settings, [
  'level',
  'health'
])
console.log(data); // {"level":19,"health":90} // 只对两个属性进行字符串化