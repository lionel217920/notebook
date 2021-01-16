## Java8的一些新特性

什么时间发行的，2014年

## 函数式编程

## STREAM 流

Features

- forEach() method in Iterable interface
- Functional Interfaces and Lambda Expressions

## ForEach()
```java
skus.forEach(productSku -> System.out.println(productSku.getId()));
```

stream一般用在并发比较高的场景，对CPU的消耗比较大，一般业务逻辑不建议使用。

## OPTIONAL

在Java8之前，我们写代码要时刻注意

## Lambda expressions

## functional interface


## 接口中包含静态方法和默认方法

在Java8之前，`接口`中只能含有公有的抽象方法，例如这样。在支付Service中，定义了获取积分的一个接口

```java
public interface IPayService {

    Points getPoints(String userId);
}
```
