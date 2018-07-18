// 写补全sortString函数，实现字符串倒序

// var str = 'jirenguhungervalley'
// var str2 = sortString(str)
// console.log(str2) // 'yellavregnuhugnerij'

function  sortString(str){
    let str1 = str
    let str2 = ''
    for(let i=1;i<=str1.length;i++) {
        lastLett = str1.substr(-i,1)
        str2+=lastLett
    }
    return str2
}
var str = "jirenguhungervalley"
var str2 = sortString(str)
console.log(str2)

