

export function deounce(fn:Function,delay:number = 1000) {
  let timer: string | number  | undefined = 0

  return function () {
    clearTimeout(timer)
    timer = window.setTimeout(() => {
      let args = arguments
      fn.apply(this,args)
    },delay);
  }
}

export function throttle(fn: Function, delay: number = 1000) {
  let timer: string | number  | undefined = 0


  return function () {
    if (timer) return 
    timer = window.setTimeout(() => {
      fn.apply(this,arguments)
    },delay)
    timer = 0
  }
}