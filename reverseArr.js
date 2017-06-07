module.exports = function reverseArr(arr) {
    console.log('invoked')

    for (var i = 0; i < Math.floor(arr.length/2); i++) {
        const temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    return arr
}
