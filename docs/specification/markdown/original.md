# Markdown original syntax

[官网地址点击这里](https://daringfireball.net/projects/markdown/)

[[toc]]

## 块级元素
**BLOCK ELEMENTS**

### 短语和段落
**PARAGRAPHS AND LINE BREAKS**

段落只是一行或多行连续的文本，由一行或多行空白行隔开。空行是指任何看起来像空行的行 - 除了空格或制表符之外什么都不包含的行被视为空白。  

当您确实想使用Markdown插入一个`<br/>`中断标记时，可以用**两个或更多空格**结束一行，然后键入return。

&nbsp;&nbsp;首行缩进两行使用两个`&nbsp;&nbsp;`

**举个例子**

人在世上，无论做什么事情，**都要脚踏实地，一步一个脚印**，一小步，一小步，循序渐进，逐渐去完成。  
要胸有大志，做事都要有计划，有目标。不能盲干、瞎干、乱干 ，要坚持不懈、朝着目标努力，并且在前行的路上，不畏艰辛，不怕坎坷崎岖，最终才能达到目的。  
__千里之行，始于足下__。任何人急于求成，或者想不吃苦，想投机取巧，走捷径达到自己的人生目标，都只能是事与愿违。  
__骐骥一跃，不能十步；驽马十驾，功在不舍__。任何成大事者，在成功的路上都会步步为营，三思而后行。每一个计划，每一个步骤，每一个环节都会缜密考量，然后逐一渐进式的付诸行动，并且时时摸索经验，总结教训，日积月累，从小做大，再做强，最后事业才能蒸蒸日上，达到辉煌的顶峰。

### 标题
**HEADERS**

Markdown支持两种样式的标题

- Setext-style 

```markdown
This is an H1
=============

This is an H2
-------------
```

- Atx-style

```md
# This is an H1

## This is an H2

###### This is an H6 ######
```

### 引用
**BLOCKQUOTES**

Markdown使用电子邮件样式 **>** 字符进行分块引用。只需要将 **>** 放在包装段落的第一行即可。

> 青，取之于蓝，而青于蓝；冰，水为之，而寒于水。木直中绳，輮以为轮，其曲中规。虽有槁暴，不复挺者，輮使之然也。故木受绳则直，金就砺则利，君子博学而日参省乎己，则知明而行无过矣。

> 故不登高山，不知天之高也；不临深溪，不知地之厚也；不闻先王之遗言，不知学问之大也。干、越、夷、貉之子，生而同声，长而异俗，教使之然也。诗曰：“嗟尔君子，无恒安息。靖共尔位，好是正直。神之听之，介尔景福。”神莫大于化道，福莫长于无祸。

> 故不登高山，不知天之高也
>
> > 不临深溪，不知地之厚也
>
> 不闻先王之遗言，不知学问之大也

Blockquotes可以包含其他降价元素，包括标题、列表和代码块。

### 列表
**LISTS**

Markdown支持有序（编号）和无序（项目符号）列表。

无序列表使用 `+`,`*`,`-`

*   Red
*   Green
*   Blue

```md
*   Red
*   Green
*   Blue
```

有序列表使用数字

1.  Red
2.  Green
3.  Blue

```md
1.  Red
2.  Green
3.  Blue
```

-  积土成山，风雨兴焉；积水成渊，蛟龙生焉；积善成德，而神明自得，圣心备焉。故不积跬步，无以至千里；不积小流，无以成江海。
-  骐骥一跃，不能十步；驽马十驾，功在不舍。锲而舍之，朽木不折；锲而不舍，金石可镂。蚓无爪牙之利，筋骨之强，上食埃土，下饮黄泉，用心一也。蟹六跪而二螯，非蛇鳝之穴无可寄托者，用心躁也。

如果列表项用空行分隔，Markdown将在HTML输出中将这些项包装在`<p>`标记中。例如

*   Bird

*   Magic

*   This is a list item with two paragraphs.

    This is the second paragraph in the list item. You're only required to indent the first line. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

*   Another item in the same list.

### 代码块
**CODE BLOCKS**

要在Markdown中生成代码块，只需将代码块的每一行缩进至少4个空格或1个制表符。

This is a normal paragraph:

    This is a code block.

    <div class="footer">
        &copy; 2004 Foo Corporation
    </div>

### 水平线
**HORIZONTAL RULES**
- - -

```md
* * *

***

*****

- - -

---------------------------------------
```

## 行内元素
**SPAN ELEMENTS**

### 链接
**LINKS**

Markdown支持两种类型的链接：**内联**和**引用**。

- 内联

带有标题的连接 [百度一下](http://www.baidu.com/ "百度地址") 百度一下你就知道.

```md
[百度一下](http://www.baidu.com/ "百度地址")
```

- 引用

这是百度的地址 [百度一下][baidu] 百度一下你就知道

[baidu]: https://www.baidu.com "百度一下"

```md
[百度一下][baidu]
[baidu]: https://www.baidu.com "百度一下"
```

I get 10 times more traffic from [Google][] than from
[Yahoo][] or [MSN][].

[google]: http://google.com/        "Google"
[yahoo]:  http://search.yahoo.com/  "Yahoo Search"
[msn]:    http://search.msn.com/    "MSN Search"

### 加强语气
**EMPHASIS**

加粗使用`**`或者`__`，斜体使用`*`或者`_`

*single asterisks*

_single underscores_

**double asterisks**

__double underscores__

un**frigging**believable

Markdown中显示*使用`\*`

\*this text is surrounded by literal asterisks\*

### 代码
**CODE**

要指示代码的范围，请用反引号（`）将其括起来。

Use the `printf()` function.

如果代码里面有 **`**，就使用多个 **``**

``There is a literal backtick (`) here.``

- A single backtick in a code span: `` ` ``

- A backtick-delimited string in a code span: `` `foo` ``

- Please don't use any `<blink>` tags.

### 图片
**IMAGES**

Markdown使用的图像语法与链接的语法类似，允许两种样式：**内联** 和 __引用__。

- 内联

```md
![Alt text](/example.jpeg)
![Alt text](/example.jpeg "Optional title")
```

![Alt text](/example.jpeg "Optional title")

- 引用

```md
![Alt text][id]
[id]: /example.jpeg  "Optional title attribute"
```

![Alt text][id]

[id]: /example.jpeg  "Optional title attribute"

## 其他
**MISCELLANEOUS**

### 自动连接
**AUTOMATIC LINKS**

只需用尖括号将URL或email地址括起来 `<http://www.baidu.com/>`  
<http://www.baidu.com/>

### 反斜杠转义
**BACKSLASH ESCAPES**

Markdown允许使用反斜杠转义符来生成文本字符，否则这些字符在Markdown的格式语法中具有特殊含义

\*literal asterisks\*

Markdown为以下字符提供反斜杠转义符：

```md
\   backslash
`   backtick
*   asterisk
_   underscore
{}  curly braces
[]  square brackets
()  parentheses
#   hash mark
+   plus sign
-   minus sign (hyphen)
.   dot
!   exclamation mark
```

### 内联HTML
**INLINE HTML**

For example, to add an HTML table to a Markdown article:

```html
<table>
    <tr>
        <td>Foo</td>
    </tr>
    <tr>
        <td>Foo</td>
    </tr>
    <tr>
        <td>Foo</td>
    </tr>
</table>
```

<table>
    <tr>
        <td>Foo</td>
    </tr>
    <tr>
        <td>Foo</td>
    </tr>
    <tr>
        <td>Foo</td>
    </tr>
</table>

### 特殊字符转义
**AUTOMATIC ESCAPING FOR SPECIAL CHARACTERS**

在HTML中，有两个字符需要特殊处理：<和&。但是，内部标记代码的范围和块范围，尖括号和和符号总是自动编码的。这使得使用Markdown编写HTML代码变得很容易。

4 < 5

AT&T
