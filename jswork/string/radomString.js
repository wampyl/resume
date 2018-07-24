// 写一个函数，生成一个长度为 n 的随机字符串，字符串字符的取值范围包括0到9，a到 z，A到Z。
// 0-9 48-57
// A-z 65-90 97-122
function getRandStr(len){
  //补全函数
  let STRING = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let randS = STRING[Math.floor(Math.random()*62)]
  if(len===1) {
    return randS
  } else {
    return randS+getRandStr(len-1)
  }
}
var str = getRandStr(10); // 0a3iJiRZap
console.log(str)
