---
sidebar: auto
---
# 剖析Function函数接口

::: tip
**Function** 类表述的是一个函数，用于接受一个参数并且输入一个结果。
:::

`Function`,`BiFunction`,`DoubleFunction`,`DoubleToIntFunction`,`DoubleToLongFunction`,`IntFunction`,`IntToLongFunction`

概念上很容易理解，先来看看这个类的源代码，里面究竟有什么

```java
@FunctionalInterface
public interface Function<T, R> {

    R apply(T t);

    default <V> Function<V, R> compose(Function<? super V, ? extends T> before) {
        Objects.requireNonNull(before);
        return (V v) -> apply(before.apply(v));
    }

    default <V> Function<T, V> andThen(Function<? super R, ? extends V> after) {
        Objects.requireNonNull(after);
        return (T t) -> after.apply(apply(t));
    }

    static <T> Function<T, T> identity() {
        return t -> t;
    }
}
```

它是一个`函数接口`，起作用的方法是`apply`方法
