
ThreadPoolExecutor



class ThreadPoolExecutor extends AbstractExecutorService

abstract class AbstractExecutorService implements ExecutorService

interface ExecutorService extends Executor

interface Executor

创建线程池的几种方式

核心线程池：
最大线程数量：如果配置的maximumPoolSize是10，当线程数量是10的时候，就开始放入阻塞队列
阻塞队列数量

阻塞队列拒绝策略，如果不设置阻塞队列的数量，那么全部在内存中。

BlockingQueue线程的阻塞队列

阻塞队列，非阻塞队列的区别

阻塞队列的值该设置为多少

ThreadPoolExecutor还有什么策略


1. 定时任务开始执行时，先将所有促销置为失效状态，并更新本地缓存数据

2. 顺序刷新促销对应商品es数据

3. 搜索接口返回商品结果数据时，先判断对应促销是否失效，如果已经失效则将促销信息删除

促销失败定时任务对应类名：PromotionToInvalidJob



LinkedBlockingQueue

ArrayBlockingQueue



synchronized
volatile
synchronized vs volatile


Java多线程编程核心技术
ThreadLocal和synchronized的区别

## 并发和并行的区别

并发： 同一时间段，多个任务都在执行 (单位时间内不一定同时执行)；
并行： 单位时间内，多个任务同时执行。


##  原子性

如果把一个事务可看作是一个程序,它要么完整的被执行,要么完全不执行。这种特性就叫原子性。

为什么多线程不一定快，如何解决？


- 理论基础

  - ThreadPool

- 容器

  - ConcurrentHashMap493

- 工具类

  - CountDownLatch531
  - ThreadLoal
  - CyclicBarrier533
  - Semaphore

- 设计模式

  - Fork/Join
  - Future

- JMM


