# Java Decompile

## What is the Java Decompiler?


编译&反编译
前端编译 javac -> .class字节码文件
后端编译 HotSpot中的JIT编译器 -> 机器语言

反编译的好处
1. Java中的语法糖，泛型，自动拆箱，自动装箱

javac -> 解糖 -> 反编译 -> 语法糖底层的实现

反编译命令：javap

利用javax.tools动态编译执行java代码

https://blog.csdn.net/gdzjsubaoya/article/details/99901753
