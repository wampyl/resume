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