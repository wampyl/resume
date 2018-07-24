function radomIp() {
    let ip
    for(let i=0;i<4;i++) {
        ip+=Math.floor(Math.random()*256)+'.'
    }
    return ip.slice(0,-1)
}
let x=radomIp()
console.log(x)