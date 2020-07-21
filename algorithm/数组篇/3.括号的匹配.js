var isValid = function (s){
    let stack =[];
    let obj = {'(':')','{':'}', '[':']'}

    for (let i=0;i<s.length; i++ ) {
        const ele =s[i];

        if (ele in obj) {
            stack.push(ele)
        } else {
            if (ele !== obj[stack.pop()]) {
                return false
            }
        }
    }
    return !stack.length
}

console.log(isValid('()[]{'));