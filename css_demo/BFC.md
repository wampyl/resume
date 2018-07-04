
1. * : IE6+IE7 都能识别*,而标准浏览器FF+IE8是不能识别*的;
2. _ : 除IE6 支持_ 外, FF+IE8+IE7都不支持_;
3. \9 :所有IE 浏览器都识别(IE6、IE7、IE8、IE9)
4. !important: IE6不能识别 !important的优先级但是能识别样式, FF+IE8+IE7 都能识别!important;


- 外边距合并:当两个垂直外边距相遇时，它们将形成一个外边距。合并后的外边距的高度等于两个发生合并的外边距的高度中的较大者。
- 如何不让相邻元素外边距合并：
    - 可以把相邻元素放在不同的BFC中即可阻止外边距合并。
    - 父子元素外边距合并则可以给父元素设置border或者padding或者让父元素成为BFC元素。

- BFC为block formatting content，块级格式化上下文。它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。
- BFC 布局规则：
    1. 内部的Box会在垂直方向，一个接一个地放置。
    2. Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
    3. 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
    4. BFC的区域不会与float box重叠。
    5. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
    6. 计算BFC的高度时，浮动元素也参与计算
- 哪些元素会生成BFC?
    1. 根元素
    2. float属性不为none
    3. position为absolute或fixed
    4. display为inline-block, table-cell, table-caption, flex, inline-flex
    5. overflow不为visible
- 例子：
    [清除内部浮动](http://js.jirengu.com/goyoliracu/1/edit)
    [2栏自适应](http://js.jirengu.com/wiciboxafo/1/edit?html,css,output)
    [外边距合并](http://js.jirengu.com/zezipumege/1/edit)



