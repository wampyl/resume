/**
 *判断手机号
 *
 */
function isPhoneNum(str) {
    reStr=/^[0]{0,1}1[3568]\d{9}$/
    return str.match(reStr)
}
console.log(isPhoneNum('18220982609'))