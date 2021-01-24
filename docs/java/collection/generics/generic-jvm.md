# 泛型代码与虚拟机

::: warning
虚拟机没有泛型类型对象，所有的对象都属于普通类。
:::

## 泛型的内部原理

::: danger 很重要
Java泛型是通过**擦除**实现的
:::

Java编译器将Java源代码转换为.class文件，虚拟机加载并运行.class文件。

Java编译器会将泛型代码转换为普通的非泛型代码，Java虚拟机实际执行的时候，不知道泛型这回事，只知道普通的类及代码。

## 类型擦除

在Java中，泛型是通过类型擦除来实现的。类型擦除是Java编译器的概念，Java虚拟机对泛型一无所知。

泛型类型都自动提供了一个**原始类型（raw type）**，原始类型的名字就是删除**类型参数**后的泛型类型名。

::: tip
**原始类型**用第一个限定的类型变量来替换，如果没有给定限定就用Object替换。
:::

泛型擦除后的表达式需要进行强制类型转换。

::: danger 注意点
如果类型参数有多个限定，为了提高效率，应该讲没有方法的接口放在边界列表的末尾。
:::

举个例子：

```java
public class Interval<T extends Comparable & Serializable> {
    private T first;
    private T second;

    public Interval(T first, T second) {
        if (first.compareTo(second) < 0) {
            
        }
    }
}
```

原始类型Interval

```java
public class Interval {
    private Comparable first;
    private Comparable second;

    public Interval(Comparable first, Comparable second) {
        if (first.compareTo(second)) {
            
        }
    }
}
```

如果`切换限定`,

```java
public class Interval<T extends Serializable & Comparable> {
    private Serializable first;
    private Serializable second;

    public Interval(Serializable first, Serializable second) {
        // 需要做强制类型转换
    }
}
```

