# 泛型接口

::: tip
接口也是可以泛型的，定义一个简单的泛型接口，T,P表示**类型参数**
:::

```java
public interface Fill<T, P> {
    void fill(T t, P p);
}
```

## 泛型接口的使用

::: danger 注意点
定义泛型接口，不关心数据类型，关心的是接口的能力。
:::

如果在业务当中，需要处理一些相似的业务逻辑，但是这些业务逻辑处理的数据类型不一样，就可以使用泛型接口。

将处理业务的能力`抽象成接口`，使用**类型参数**来接受不同的数据，使用的时候将**接口当做方法的入参**。

举个例子：

1. 首先定义业务接口
```java
List<Head> getHead(Fill<Head, Category> fill);
```

2. 业务接口实现
```java
List<Head> getHead(Fill<Head, Category> fill) {
    if (fill != null) {
        fill.fill(head, category);
    }
}
```

3. 调用接口
```java
service.getHead((head, category) -> {
    head.setName(category.getName);
})
```

## JDK中的泛型接口

### Comparable接口

```java
public interface Comparable<T> {
    public int compareTo(T o);
}
```

**T是类型参数**，实现接口时指定具体类型。

```java
public final class Integer extends Number implements Comparable<Integer> {
    public int compareTo(Integer anotherInteger) {
        return compare(this.value, anotherInteger.value);
    }
}
```

### Comparator接口

```java
public interface Comparator<T> {
    int compare(T o1, T o2);
}
```

**T是类型参数**，实现接口时指定具体类型。

```java
private static class CaseInsensitiveComparator implements Comparator<String>, Serializable {
    public int compare(String s1, String s2) {
        
    }
}
```