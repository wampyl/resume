// 分别举例说明数组方法
// push、pop、shift、unshift、join、
// splice、sort、join、reverse、concat的作用

// push 在数组中增加一个元素，push进一个栈的形式
let arr = [5,6,7,8]
arr.push(9)
console.log(arr)

// pop 出栈
arr.pop()
console.log(arr)

console.log(arr.shift())
console.log(arr.unshift(2))
console.log(arr)

arr2 = [11, 12]
// 作用是把数组元素（对象调用其toString()方法）使用参数作为连接符连接成一字符串，不会修改原数组内容
console.log(arr.join(","))
// 数组倒序，但是会改变原来的数组
console.log(arr.reverse())
console.log(arr) //arr倒序
// 连接两个数组，但是不会改变任何一个数组
console.log(arr.concat(arr2))


