function sum(num) {
    return function(num2) {
        return num + num2
    }
}

console.log(sum(1)(2))