# Java Collections Framework

::: warning
这里介绍的Java集合框架都是基于JDK8
:::

## What is a Collections Framework

::: theorem Java集合框架定义
A collection - 通常又称之为容器 - 只是一个将多个元素聚合成一个单元的对象。Collections被用来存储，检索，操作数据。通常情况下，他们代表所代表的数据项形成了一个自然的组。

::: right
From [Java Tutorials](https://docs.oracle.com/javase/tutorial/collections/intro/index.html)
:::

数据结构可以粗略的对应于Java中的容器类

集合框架是一个统一的用来表示和操作集合的体系结构，所有的集合框架都包含以下几个部分：

- **Interfaces**（接口）：这些都是抽象数据类型来表述集合，在面向对象中，接口通常形成一个层次结构。
- __Implementations__（实现）：这些都是接口的具体实现，本质上，他们是可重用的数据结构。
- __Algorithms__（算法）：算法是多态的，也就是说相同的方法可以在不同的接口实现中使用，本质上，算法是可重复使用的功能。

## Collections Framework Category

Java集合框架可以分为两大类：一类是实现Collection接口；另一类是实现Map接口

- Collection是一个基本的集合接口

- Map没有继承Collection接口，与Collection是并列关系

## Collections Framework Interface

::: theorem Java集合框架接口
:blue_heart:核心接口就是Java集合框架的灵魂所在:purple_heart:
::: right
From [Java Tutorials](https://docs.oracle.com/javase/tutorial/collections/index.html)
:::

核心集合接口封装不同类型的集合，核心集合接口是Java集合框架的基础。

核心接口集合组成一个**层次结构**:

![Collection Interface](https://image.hualihai.cn/blog/20f01c7916d04a20a204b1cc3e49283f)

- Collection - 集合的根层次 
- Set - 不能包含重复元素的集合
- List - 有序的集合
- Queue - 队列
- Deque - 双端队列
- Map - 一个将建映射到值的对象，一个Map不能含有重复的Key值
