const input = document.querySelector('input')
let count=0

const debounce = (fn, t)=>{
    let timer;
    
    return function(...args){
        clearTimeout(timer)

        timer=setTimeout((e) => {
            fn.apply(this, args)
        }, t || 1000);
    }
}

const getInput=(e)=>{
    console.log('key pressing...', count++, e.target.value);
}

input.addEventListener('keypress', debounce((e)=>getInput(e)))