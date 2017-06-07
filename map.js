Array.prototype.map = function (callback) {

    const arr = [];

    this.forEach((val) => {
        // console.log(val)
        // console.log('val-<', callback(val))
        arr.push(callback(val))
    })

    return arr;
}


const arr = [1,2,3];
const result = arr.map((val) => val * val) // [1,4,9]
console.log(result)
