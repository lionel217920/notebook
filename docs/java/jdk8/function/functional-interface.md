# FunctionalInterface注解

::: tip
在`java.lang`包下面，Java8版本加入的注解。
:::

## 类注释翻译

An informative annotation type used to indicate that an interface type declaration is intended to be a <i>functional interface</i> as defined by the Java Language Specification.

一个提供消息的注解类型，用于表明：一个接口类型申报，旨在使用Java语言规范定义一个**接口函数**

Conceptually, a functional interface has exactly one abstract method.  
Since {@linkplain java.lang.reflect.Method#isDefault()default methods} have an implementation, they are not abstract.  
If an interface declares an abstract method overriding one of the public methods of {@code java.lang.Object}, that also does <em>not</em> count toward the interface's abstract method count since any implementation of the interface will have an implementation from {@code java.lang.Object} or elsewhere.


<p>Note that instances of functional interfaces can be created with lambda expressions, method references, or constructor references.</p>

<p>If a type is annotated with this annotation type, compilers are required to generate an error message unless:</p>

<ul>
  <li>The type is an interface type and not an annotation type, enum, or class.</li>
  <li>The annotated type satisfies the requirements of a functional interface.</li>
</ul>

<p>However, the compiler will treat any interface meeting the definition of a functional interface as a functional interface
regardless of whether or not a {@code FunctionalInterface} annotation is present on the interface declaration.</p>

## 源代码

```java
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface FunctionalInterface {}
```

## JDK源码用到的地方

### java.io

> FileFilter

### Comparator

### java.util.function

## 怎么使用

