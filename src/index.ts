export type DecoratedFunction = (...args: any) => any

export const debounce = function<T extends DecoratedFunction>(func: T, timeout = 250) {
    let id = 0
    return function(this: ThisParameterType<T>, ...args: Parameters<T>) {
        if (id) {
            clearTimeout(id)
        }
        id = setTimeout(() => {
            func.call(this, ...args)
        }, timeout)
    }
}

export const throttle = function<T extends DecoratedFunction>(func: T, timeout = 250) {
    let isThrottled = false
    return function(this: ThisParameterType<T>, ...args: Parameters<T>) {
        if (isThrottled) {
            return
        }
        isThrottled = true
        setTimeout(() => {
            isThrottled = false
            func.call(this, ...args)
        }, timeout)
    }
}
