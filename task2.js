const a = 11

function isPrime(num) {
    if (typeof num !== 'number') {
        console.log('error: не число')
        return
    }
    if (num > 1000) {
        console.log('error: больше 1000')
        return
    }
    if (num === 0) {
        console.log('число 0 не является простым')
        return
    }
    if (num === 1) {
        console.log('число 1 не является простым')
        return
    }

    let flag = false
    for(let i=2; i<num+1; i++) {
        if (num % i === 0 && i!==num) {
            flag = true
            break
        }
    }

    if (flag) {
        return false
    } else {
        return true
    }
}

console.log(isPrime(a))