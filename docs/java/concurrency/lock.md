# JVM锁

::: warning
单进程，多线程
:::

知道volatile的可能会想到用volatile，使用volatile不会造成阻塞

## 深入理解Syncronized关键字

悲观锁就是synchronized

乐观锁就是原子类（内部使用CAS实现）

乐观锁是一种思想，即认为读多写少

CAS是一种更新的原子操作，比较当前值跟传入值是否一样，一样则更新，否则失败。

CAS是乐观锁写那一步操作的一种实现方式罢了


## Java中的CAS实现原理

CAS的目的：在多线程中为了保持数据的准确性，避免多个线程同时操作某个变量。

现在采取的是CAS（Compare And Swap比较和交换）解决了volatile不能保证原子性.

比较和交换（Conmpare And Swap）是用于实现多线程同步的原子指令。是一种实现并发算法时常用到的技术

对CAS的理解，CAS是一种无锁算法，CAS有3个操作数，**内存值**V，**旧的预期**值A，要修改的**新值**B。当且仅当预期值A和内存值V相同时，将内存值V修改为B，否则什么都不做。

CAS（比较并交换）是CPU指令级的操作.

```java
do{

备份旧数据；

基于旧数据构造新数据；

}while(!CAS( 内存地址，备份的旧数据，新数据 ))
```

### JDK中的应用

java.util.concurrent.atomic，AtomicInteger，

AtomicInteger.incrementAndGet的实现用了乐观锁技术。

### CAS的缺点

- ABA问题

两个线程，1取内存值然后备份，2取内存值本分，2将值修改为a，然后又修改为b，然后1判断值没有被修改，更新成c.