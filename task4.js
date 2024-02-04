function numbersInPeriod(a, b) {
    setInterval(() => {
        for(let i=a; i<=b; i++) {
            console.log(i)
        }
    }, 1000)
}

console.log(numbersInPeriod(3, 5))