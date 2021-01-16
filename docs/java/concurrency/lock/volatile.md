由于volatile关键字是与Java的内存模型有关的。

volatile它所修饰的变量不保留拷贝，直接访问主内存中的

并发之原子性、可见性、有序性

原子性：原子性意味着一个时刻，只有一个线程能够执行一段代码

可见性，有序性的概念。

## JMM

```java
i = i + 1;
```

对于可见性，Java提供了volatile关键字来保证可见性。

缓存一致性问题？？


## volatile和synchronized的区别

- volatile仅能使用在变量级别；synchronized则可以使用在变量、方法、和类级别的

- volatile仅能实现变量的修改可见性，不能保证原子性；而synchronized则可以保证变量的修改可见性和原子性

- volatile不会造成线程的阻塞；synchronized可能会造成线程的阻塞。