## js1-数据类型
- 数据类型
    - 基本类型
        - number
        - string
        - boolean
    - 引用类型
        - object，又可以分为三个子类型
            - object 狭义的独享
            - array 数组
            - function 函数
    - 特殊值
        - undefined
             ```
             typeof undefined //undefined
             ```
        - null 
             ```
             typeof null //object
             ```
        - undefined和null区别
            - 可以认为一块原始地，undefined时一块未开荒的地，只是在内存中声明占用了，但是干什么不知道；null在这块的基础上把图清理干净。
    - Symbal ES6新增

## 如何异步加载脚本？
- 没有defer或async，浏览器会立即加载并执行制定脚本.立即指的是在渲染该script标签之后的文档元素之前，也就是不等待后续载入的文档元素，读到就立刻加载并执行。
- 使用defer和async
    - async,加载和渲染后续文档元素的过程将和script.js的加载和执行并行进行(异步)。
     ```
     <script async src="script.js"></script>
     ```
    - defer，加载后续文档元素的过程将和script.js的加载并行进行(异步)，但是script.js的执行要在所有元素解析完成之后，DOMContentLoaded事件触发之前完成。
    ```
    <script defer src="script.js"></script>
    ```
    - defer:脚本延迟到文档解析和显示后执行，有顺序
    - async:不保证顺序
    - 
## js发展简史？
- 上世界90年代，网速很慢，一个表单提交去后端验证，速度慢。所以最初js主要用来验证表单数据。

## ES3？ ES5？ ES6？
- ES是什么？
    - JS出现后，微软模仿JS开发了一种相近的语言，取名JScript,首先内置于IE3.0。Netscapeg公司面临丧失浏览器脚本语言的主导。
    - 为了抵抗微软，Netscape公司将JS提交给国际标准化组织ECMA（European Computer Manufacturers Association），希望JS能够称为国际标准。
    - 1997年7月，ECMA组织发布262号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为ECMAScript。这个版本就是ECMAScript 1.0版。为了避免版权纠纷以及体现中立性、开放性,所以并没有命名为JavaScript。所以，ECMAScript与JavaScript的关系为，ECMAScript是JavaScript的规格，JavaScript是ECMAScript的一种实现。
    - ES3?
    - 1999年12月，ECMAScript 3.0版发布，成为JavaScript的通行标准，得到了广泛支持。
    - 2008年，由于对下一版本功能分歧较大，所以
## 浏览器的渲染机制
- 浏览器解析
        - html文件加载后，解析构建html生成DOM Tree。
        - 浏览器请求加载css后，解析和构建CSS Rule Tree.
        - Javascript脚本加载后，通过DOM api和 CSSOM api来操作DOM Tree和CSSOM。
    - 浏览器渲染
        - 浏览器引擎通过DOM Tree和CSS Rule Tree来构建生成Rendering Tree.
        - Rendering Tree与Dom Tree并不完全对应。display：none并不渲染在Rendering Tree中，而visibility:none会呈现在渲染树上。
        - 有了Rendering Tree，浏览器就会知道页面中有哪些节点、各个节点的css定义以及他们的从属关系。下一步操作称为Layout或者Flow,就是计算各个节点在屏幕中的位置。
        - Layout后，浏览器就知道了哪些节点需要显示，每个节点的css属性以及每个节点在屏幕中的位置。最后通过Painting按照计算出的规则通过显卡将内容画在屏幕上。
## reflow 和 repaint分别指什么？
    - reflow 
        - reflow，回流后者重排.某个元素的位置发生了改变,或者几何属性发生了改变，造成需要重新计算渲染树上的坐标，影响了其他渲染书的元素,需要重新排列节点的顺序。一个网页至少经过一次reflow。
        - reflow较repaint耗费更多时间；
        - 涉及到css盒模型的属性基本都会导致重排。
        ```
        offsetTop, offsetLeft, offsetWidth, offsetHeight
        scrollTop/Left/Width/Height
        clientTop/Left/Width/Height
        getComputedStyle(), or currentStyle in IE
        ```
    - repaint
        - repaint，重绘，如果一个元素的坐标或者几何属性不发生变化，只是涉及到外观，则会引发重绘。重绘可以只涉及到部分区域。
        - 不影响css盒模型的css属性会导致重绘。