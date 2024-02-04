const xInPowerOfN = (x, n) => {
    if (typeof x !== 'number') {
        console.log('error: x - не число')
        return
    }
    if (typeof n !== 'number') {
        console.log('error: n - не число')
        return
    }
    if (x !== Math.floor(x)) {
        console.log('error: x - не натуральное число')
        return
    }
    if (n !== Math.floor(n)) {
        console.log('error: n - не натуральное число')
        return
    }
    let y = x
    for(let i=1; i<n; i++) {
        y = y * x
    }
    return y
}

console.log(xInPowerOfN(2,4))