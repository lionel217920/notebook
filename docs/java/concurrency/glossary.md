# Introduction



理解并发之前，先弄懂一些概念




## 深入理解并发和并行
::: tip
并发和并行都是操作系统中的概念，表示的是CPU执行多个任务的方式
:::

单CPU的计算机，在CPU中同一时间只能做一件事，看起来`同时干多件事`是通过CPU时间片技术并发完成的。
## Parallelism

## Concurrency
并发，在操作系统中是指一个时间段中有几个程序都处于已启动运行到运行完毕之间，且这几个程序都是在`同一个处理机`上运行的，但任一个时刻点上只有一个程序在处理机上运行。

并发，指的是多个事情，在同一 **时间段** 内同时发生了。

::: warning
并发的多个任务是互相抢占资源的
:::


## Parallelism VS Concurrency
并行，当系统有`一个以上CPU`时，当一个CPU执行一个进程，另一个CPU可以执行另一个进程，两个进程互不抢占CPU资源，可以同时进行。
并行，指的是多个事情，在同一 **时间点** 上同时发生了

::: warning
并行的多个任务之间是不互相抢占资源的
:::

只有在多CPU的情况下，才会发生并行，否则看似并行，其实是并发执行的

## Physical Cores


## Logical Cores


## Processor

## Core

## CPU

CPU个数
CPU核心数
线程数
https://www.cnblogs.com/kimsimple/p/7787018.html
https://www.cnblogs.com/fubaizhaizhuren/p/7501403.html
https://blog.csdn.net/ohbxiaoxin/article/details/82217498


Does a new thread in Java run on a different processor core?




https://howtodoinjava.com/java/multi-threading/concurrency-vs-parallelism/
https://howtodoinjava.com/java/multi-threading/concurrency-vs-parallelism/


how processors and threads work？

https://docs.oracle.com/javase/tutorial/
java thread and cpu thread

## 单核CPU多线程有必要吗？

通常一个任务不光 cpu 上要花时间， io 上也要花时间（例如去数据库查数据，去抓网页，读写文件等）。 一个进程在等 io 的时候， cpu 是闲置的，另一个进程正好可以利用 cpu 进行计算。 多几个进程一起跑，可以把 io 和 cpu 都跑满了。

单核CPU使用多线程，同一时间只能一个线程在跑，时间片切换，效率会增加吗？


一个作业可不总是CPU密集型的，必然穿插着大量的IO调用在其中，所以单核情况下多线程也是可以提高性能的。

多线程在`CPU密集型`的作业下的确不能提高性能甚至更浪费时间，但是在`IO密集型`的作业下则可以提升性能。

https://zhidao.baidu.com/question/1241346576592987859.html
https://www.oschina.net/question/860036_2142892