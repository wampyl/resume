//分别举例说明ES5数组方法 indexOf、forEach、map、every、some、filter、reduce的用法

arr = [5, 6, 7, 8, 9]

// indexOf 查找数组内的指定 元素，查找到第一个后返回索引，没有查找到返回-1，indexOf从头到尾查询，lastIndexOf反向搜索
arr.indexOf(6) // 1
arr.indexOf(2) //-1

// forEach 遍历数组，参数为一个回调函数

arr.forEach(element => {
    console.log(element)
});
arr.forEach(function (ele, index, arr) {
    console.log(ele)
    console.log(index)
    console.log(arr)
});

// reduce 遍历数组，调用回调函数，将数组元素组合成一个值，reduce从索引最小值开始，reduceRight反向，方法有两个参数



// map 与forEach类似，遍历数组，回调函数返回值组成一个新数组返回，新数组索引结构和原数组一致，原数组不变




// every是所有函数的每个回调函数都返回true的时候才会返回true，当遇到false的时候终止执行，返回false

// some函数是“存在”有一个回调函数返回true的时候终止执行并返回true，否则返回false

// 在空数组上调用every返回true，some返回false



 