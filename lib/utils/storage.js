export const setItem = (key, val) => {
    if (typeof uni == 'undefined') {
        window.localStorage.setItem(key, val)
    }
    else {
        uni.setStorage(key, val)
     
    }

}


export const getItem = (key) => {
    if (typeof uni == 'undefined') {
        window.localStorage.getItem(key)
    }
    else {
        return uni.getStorage(key)
       
    }
}