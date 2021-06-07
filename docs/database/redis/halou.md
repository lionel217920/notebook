哈喽二面准备

1.jvm为什么需要分代回收机制？

它的核心思想是根据对象存活的生命周期将内存划分为若干个不同的区域。一般情况下将堆区划分为老年代（Tenured Generation）和新生代（Young Generation），老年代的特点是每次垃圾收集时只有少量对象需要被回收，而新生代的特点是每次垃圾回收时都有大量的对象需要被回收

所有新生成的对象首先都是放在年轻代的。年轻代的目标就是尽可能快速的收集掉那些生命周期短的对象。年轻代分三个区。一个Eden区，两个 Survivor区(一般而言)

https://blog.csdn.net/weixin_38750084/article/details/83317028

2.自定义类加载器的实际应用有哪些 ？

https://www.zhihu.com/question/46719811?sort=created

实现热加载以及热部署。

3.mysql 索引的类型 ？

为什么是 B+tree 不是B-tree ？


hash在哪些场景下用？


4.覆盖索引有了解过嘛 ？怎么实现的 ？是否需要回表？

https://www.cnblogs.com/happyflyingpig/p/7662881.html


5.Redis 底层的selector  模型怎么实现的 ？


6.CPU怎么调度线程的？中断机制是啥 ？--这个问了我



7.Redis 集群的类型有哪些 ？各有什么优缺点？


8.微博大V 发布文章（一亿的粉丝），粉丝的文章列表怎么设计 ？


9.锁升级过程 ？

https://www.cnblogs.com/wangwudi/p/12302668.html


https://www.zhihu.com/question/57794716/answer/606126905

https://www.cnblogs.com/myseries/p/12213997.html


----------------------------------------



- DDD领域驱动模型设计：


- CMS垃圾收集器：

CMS是老年代垃圾收集器，在收集过程中可以与用户线程并发操作。它可以与Serial收集器和Parallel New收集器搭配使用。

https://www.jianshu.com/p/86e358afdf17


- 双亲委派

https://www.jianshu.com/p/1e4011617650

https://blog.csdn.net/codeyanbao/article/details/82875064

https://blog.csdn.net/m0_38075425/article/details/81627349

- 类加载器

https://blog.csdn.net/m0_38075425/article/details/81627349


- 线程池相关

https://www.cnblogs.com/zz-ksw/p/12831249.html


线程池拒绝策略什么时候执行

线程池参数

- MYSQL EXPLAIN执行计划

- MYSQL 不走索引

- 主键索引和唯一索引的区别

- 索引原理B树

- MySQL索引类型

- MySQL InnoDB区别

https://www.zhihu.com/question/20596402

- MYSQL事务

https://www.cnblogs.com/kismetv/p/10331633.html


- profoBuf的优缺点

http://qiusuoge.com/16816.html


- zk的CAP规则？

- spring加载bean的过程？

- spring是如何装载bean的？

- springBoot启动流程

- 接口幂等性如何处理

- RocketMQ解决幂等性的问题

https://www.cnblogs.com/chx9832/p/12325871.html


- Runable和Thread

- synchronized

https://www.cnblogs.com/weibanggang/p/9470718.html


- HashMap如何做到线程安全

https://www.cnblogs.com/shijianchuzhenzhi/p/12904282.html


- ConcurrentHashMap

https://www.jianshu.com/p/78989cd553b4



录音：


## Spring部分

- bean的声明周期

- bean的初始化流程

- springBoot的start的是什么？

- spring的start是怎么加载到Spring的容器当中的。自动装载？？PON中引入依赖就可以了怎么做的

- SpringBoot启动类的三个注解？

- @Configuration支持不同场景的配置？ConditionOnClass

SpringBoot的条件注入。。。


## Java集合

jdk1.8

HashMap的线程不安全体现在哪里？

hashmap多线程问题？

hashMap扩容机制？

链表变成红黑树的机制？？？两个条件：长度是8 + 长度大于64

通过key怎么计算是放到数组和链表？

hashMap初始容量是16，扩容16？扩容机制？：数组+链表+红黑树的迁移策略都不一样。

hashMap的扩容干了什么？

## 类加载

加载，验证，初始化

类加载先被哪个类加载？？？？

GC垃圾回收器





