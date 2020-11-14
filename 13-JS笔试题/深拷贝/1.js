const nwObject = JSON.parse(JSON.stringify(oldObj))

const newObject = Object.assign(...oldObj)


function deepCopy(object) {
    if (!object || typeof object!== "object")  return

    let newObjecct = Array.isArray(object) ? [] :{}

    for(let key in object) {
        if (object.hasOwnProperty(key)) {
            newObjecct[key] = typeof object[key] === 'object' ? deepCopy(object[key]) : object[key]
        }
    }

    return newObjecct
}


const object = {
    arr: [12,3],
    obj: {
        name: 'xiao',
        age: 1,
        temp: [{
            name: 'li',
            age: 12
        }]
    }
};


function deepClone (object) {
    if (!object || typeof object !=='object') return 
    
    let newObject = Array.isArray(object) ? []: {}
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            newObject[key] = typeof object[key] === 'object' ? deepClone(object[key]) : object[key]
        }
    }
     return newObject
}