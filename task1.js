const arr1 = [1,2,3,4,5]
const arr2 = [2,2,2,2,2]
const arr3 = ['a','b','c','d','e']
const arr4 = ['f','f','f']

function checkArray(arr) {
    let flag = false
    arr.sort()
    for(let i=0; i<arr.length-1; i++) {
        if (arr[i]!==arr[i+1]) {
            flag = true
        }
    }
    if (!flag) {
        console.log('в массиве все элементы одинаковые')
    }
}

checkArray(arr1)
checkArray(arr2)
checkArray(arr3)
checkArray(arr4)