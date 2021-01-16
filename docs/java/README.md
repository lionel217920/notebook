# Java基础

环境变量，jdk与jre的区别，jar包，rt.jar干嘛的，其他的jar呢，

Java程序怎么跑起来的，编译与反编译，底层东西

## 异常

form表单不能传数组，没有数组的概念，多个值就是数组。


### 异常1


### 异常2


StringBuilder会把null加入进去
```java
StringBuilder sb = new StringBuilder();
sb.append(goods.getSpecs()).append(" ").append(goods.getModelNumber()).append(" ").append(goods.getForecastContent()).append(" ");

System.out.println(sb.toString());
```
输出结果
`null null 0.33粒 `

枚举类会自动继承`Enum`


面向接口编程，扩展性高，不关心内部的实例

继承的缺点？耦合太高，使用泛型

泛型程序设计


枚举类型的构造方法为什么不能加public

Why can't enum constructors be protected or public in Java?


[Java Documentation](https://docs.oracle.com/en/java/)

面向接口编程，接口就是功能的`行为`

集合，线程，并发，锁，io等一定要深入到源码级别

对象克隆，深克隆和浅克隆

值传递和引用传递：值传递是基本数据类型，引用传递是对象

Java基本类型，分类讲出来，逻辑清晰

private protected public default

Java多态：多态是同一个行为具有多个不同表现形式或形态的能力

基本数据类型，自动拆箱，对象拆箱？

动态编译，反射

## Java core
https://dzone.com/refcardz/core-java?chapter=2

https://www.javatpoint.com/immutable-string

## 知识点分类

- 基础程序设计

基本数据类型，变量，关键字，运算符，流程控制，数组，输入与输出，移位运算

- 基本对象与类

类的基础，private protected, 对象克隆，String类，StringBuilder，对象初始化流程，构造方法，静态代码块，方法块，类的特性，内部类，常用基础类，枚举类

- 面向对象

类，超类，子类，面向对象设计，接口，抽象类，面向接口编程，继承

- 动态特性

反射，类加载机制，代理，动态代理，静态代理，注解，编译器，反编译

- 异常与日志

异常分类，try catch，何时捕获何时抛出

- 泛型程序设计

泛型类，泛型类型的继承，通配符，反射和泛型

- 集合

Collection Map List，列表，队列

- I/O

文件基础，BIO, NIO, AIO

- 并发

线程基本概念，并发包juc

- 函数式编程

jdk8, lambda表达式，function，stream

- 设计模式

- JVM

- 如何做抽象，提高抽象能力

- JSR JCP

jsr303 Bean Validation
jsr380 Bean Validation 2.0
