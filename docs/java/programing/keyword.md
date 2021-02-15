# Java中的关键字

## final vs finally vs finalize

- final

**final并不等同于不可变**

Java编译器可以对final变量进行一些特别的优化，如果数据复制后就不应该再变了，就加final修饰符。

可以用来修饰类、方法、变量，分别有不同的意义，final修饰的类代表不可以继承扩展，final的变量是不可以修改的，而final的方法也是不可以重写的。

- finally


- finalize

finalize是基础类java.lang.Object的一个方法，它的设计目的是保证对象在被垃圾收集前完成特定资源的回收。finalize机制现在已经不推荐使用。


## this和super

