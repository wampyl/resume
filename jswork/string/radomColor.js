// 写一个函数，生成一个随机颜色字符串，合法的颜色为#000000~ #ffffff。
function getRandColor(){
    let num = Math.floor(Math.random()*256)
    // console.log(num.toString(16))
    return num.toString(16)
}
// console.log(getRandColor())
var color = getRandColor()
console.log(color)   // #3e2f1b
