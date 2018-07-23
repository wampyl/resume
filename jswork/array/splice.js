// 用 splice函数分别实现 push、pop、shift、unshift方法。
// splice() 返回一个由删除数组组成的新数组，如果没有删除，就返回一个空数组
function push(arr, value){
    arr.splice(arr.length, 0, value)
    return arr.length
}
var arr = [3, 4, 5]
arr.push(10) // arr 变成[3,4,5,10]，返回4
// 改进版
function push(arr){
    for(var i=1; i<arguments.length;i++){
        arr.splice(arr.length, 0, arguments[i])
    }
    return arr.length
}
//下面的写法有兴趣的同学可自行了解 //http://es6.ruanyifeng.com/#docs/array
function push3(arr, ...args){
    console.log(...args)
    arr.splice(arr.length, 0, ...args)
    return arr.length
}

console.log(arr.splice(arr.length, 0, 5))
console.log(arr)

function pushSplice1(arr, value) {
    arr.splice(arr.length, 0, value)
    return arr.length
}

var b = pushSplice1(arr, 6)
console.log(b)
console.log(arr)

x= [1,2,3]
// function pushSplice2(arr) {
//     console.log(arguments[0])
//     for(let i=1;i<arguments.length;i++) {
//         console.log(arguments.length)
//         console.log("helllo"+arguments[i])
//         arr.splice(arr.length, 0, arguments[i])
//     }
//     return arr.length
// }
// console.log(pushSplice2(x))
// console.log(x)
console.log("---")
// console.log(push3(x, 5))
console.log(x)


// pop function

function popSplice(arr) {
    console.log(arr.splice(-1))
    return arr.length
}

xx = popSplice(x)
console.log(xx)
console.log(x)