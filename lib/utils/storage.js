export const setItem = (key, val) => {
    if (typeof uni == 'undefined') {
        uni.setStorage(key, val)
    }
    else {
        window.localStorage.setItem(key, val)
    }

}


export const getItem = (key) => {
    if (typeof uni == 'undefined') {
        return uni.getStorage(key)
    }
    else {
        window.localStorage.getItem(key)
    }
}