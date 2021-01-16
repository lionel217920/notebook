# Functional Interfaces

函数式接口是`jdk1.8`引入的新特性，相关的类都在`java.util.function`包下面。

## java.util.function包信息

<em>Functional interfaces</em> provide target types for lambda expressions and method references.  
Each functional interface has a single abstract method, called the <em>functional method</em> for that functional interface,
to which the lambda expression's parameter and return types are matched or adapted.  
Functional interfaces can provide a target type in multiple contexts, such as assignment context, method invocation, or cast context:

```java
// Assignment context
Predicate<String> p = String::isEmpty;

// Method invocation context
stream.filter(e -> e.getSize() > 10)...

// Cast context
stream.map((ToIntFunction) e -> e.getSize())...
```

The interfaces in this package are general purpose functional interfaces used by the JDK, and are available to be used by user code as well.  
While they do not identify a complete set of function shapes to which lambda expressions might be adapted, they provide enough to cover common requirements.  
Other functional interfaces provided for specific purposes, such as {@link java.io.FileFilter}, are defined in the packages where they are used.

## @FunctionalInterface注解说明


在`java.util.function`包下面，所有的类都标记了`@FunctionalInterface`注解，那么这个注解是干什么的呢？

被这个注解注释的接口就是`函数式接口`

`MCallable`被标记成了函数式接口
```java
@FunctionalInterface
public interface MCallable {
    void call();
}
```

在使用的时候先定义接口
```java
void goodsByIdsCallback(Collection<Long> goodsIds , Callback<Collection<Goods>> successCallback, MCallable afterCallable);
```

实现类的写法
```java
goodsService.goodsByIdsCallback(goodsId, data -> {lambda表达式}, wait::countDown);
```

@FunctionalInterface标注的方法只能有一个方法，其他都是`default`


使用函数式接口的列子

定义接口

```java
List<HeaderModule> headList(Fill<HeaderModule> fill);
```

在lambda表达式中，cid就不能改变了
```java
List<HeaderModule> headerModules = cpsClassService.headList(headerModule -> {
    if (cid != null && cid == headerModule.getParam().get("cid")) {
        headerModule.setSelected(true);
    }
});
```
