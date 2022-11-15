import mitt from 'mitt'

const instance = mitt()


export default {

    $on: instance.on,
    $off: instance.off,
    $emit: instance.emit
}

