function debounce(fn, wait) {
    let timer = null;
    return function () {
        let context = this;
        let args = arguments;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }

        timer = setTimeout(() => {
            fn.apply(context, args);
        }, wait);
    }
}

function debounce(fn, delay) {
    let timer = null
    return function() {
        const context = this;
        const args = arguments;
        // 判断timer
        if (timer) {
            clearTimeout(timer)
            timer = null
        }

        timer = setTimeout(() => {
            fn.apply(context,args)
        }, delay);
    }
}


function debounce (fn, delay) {
    let timer = null
    return function() {
        const context = this;
        const args = arguments;
        if (timer) {
            clearTimeout(timer)
            timer = null
        }

        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay);
    }
}

function debounce (fn, delay) {
    let timer = null
    return function() {
        const args = arguments;
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(()=>{
            fn.apply(this, args)
        },delay)
    }
}

var fn = function () {
    console.log('boom')
}
  
setInterval(debounce(fn,500),1000)



function throttle (fn, delay) {
    let preTime = Date.now()
    return function () {
        const args = arguments
        const nowTime = Date.now()

        if (nowTime - preTime >= delay) {
            preTime = Date.now();
            return fn.apply(this, args)
        }
    }
}

function throttle(fn, delay) {
     const preTime = Date.now()

     return function() {
         const nowTime = Date.now()
         const args = arguments
         if (nowTime-preTime >= delay) {
            preTime = Date.now()
            return fn.apply(this, args)
         }
     }
}