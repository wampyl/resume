// 写一个函数，返回从min到max之间的 随机整数，包括min不包括max 。

function radomNum(min, max) {
    let num=max-min
    return min+Math.floor(num*Math.random())
}

console.log(radomNum(19,25))