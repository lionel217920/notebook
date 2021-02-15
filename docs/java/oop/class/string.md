# 常用基础类之String

## String

String是典型的Immutable类，被声明为final，所有的属性也是final。**由于不可变性，类似拼接，裁剪字符串操作，都会产生新的String对象**

- 通过String和相关类，考察基本的线程安全设计与实现，各种基础编程实践

- 考察JVM对象缓存机制的理解以及如何良好地使用

- 考察JVM优化Java代码的一些技巧

## 字符串缓存



## StringBuilder

为了解决拼接字符串产生太多中间对象的问题而提供的一个类。

## StringBuffer

与`StringBuilder`没有本质区别，但是线程安全，使用`synchronized`有一定的开销。

## StringBuilder VS StringBuffer

一个是线程安全，一个是线程非安全

for循环禁止使用字符串拼接

使用哪一种考虑场景，有没有并发情况

StringBuilder代替StringBuffer, StringBuffer线程安全做了不必要的开销