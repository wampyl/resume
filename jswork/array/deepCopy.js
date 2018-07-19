// TODO:
// 遍历
// 深拷贝
arr = [1,2,3,4,5]
arr2 = arr
console.log(arr)
console.log(arr2)
console.log(arr === arr2)
// arr3 = [1,2,3,4,5]
// console.log(arr === arr3)


// 
function deepClone(arr) {
    let arr1 = []
    for(let i=0; i<arr.length;i++) {
        // arr1.push(arr[i])
        console.log(typeof arr[i])
    }
    return arr1
}

arr4 = deepClone(arr)
console.log(arr4 === arr)


// JSON.stringify JSON.parse
function deepClone(obj){
    return JSON.parse(JSON.stringify(obj))
}
obj = {
    name: "Herry",
    age: 18,
    hobby: ["football", "soccer", "teenis"]
}
obj5=deepClone(obj)
console.log(obj5.age=44)


obj2 = JSON.parse(JSON.stringify(obj))
console.log(JSON.stringify(obj))
console.log(JSON.parse(JSON.stringify(obj)))
console.log(JSON.parse(JSON.stringify(obj)) === obj)
console.log(obj)

console.log(obj)
obj2.age=9
console.log(obj2)
console.log(obj)
obj3=obj
obj3.age = 88
console.log(obj3)
console.log(obj)
console.log(obj === obj3)


