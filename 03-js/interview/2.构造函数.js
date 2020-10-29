class Chameleom {
  static colorChange(newColor) {
    this.newColor = newColor
  }
  constructor({
    newColor = 'green'
  } = {}) {
    this.newColor = newColor
  }
}

const freddie = new Chameleom({
  newColor: 'purple'
})
freddie.colorChange('orange')
//  Uncaught TypeError报错

//colorChange方法是静态的，静态方法仅在构造函数创建的时候存在，并不能传递给他们的任何子集



const person = {
  name: 'Lydia Hallie',
  hobbies: ['coding']
}

function addHobby(hobby, hobbies = person.hobbies) {
  hobbies.push(hobby)
  return hobbies;
}
addHobby('running', [])
addHobby('dancing')
addHobby('baking', person.hobbies)

console.log(person.hobbies);

//["coding", "dancing", "baking"]
// 考察的是函数默认值