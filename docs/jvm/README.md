JVM模型

分代，回收算法，垃圾回收器搭配和对比，类加载


::: danger 错误
Unrecognized VM option 'MetaspaceSize=128m'
Error: Could not create the Java Virtual Machine.
Error: A fatal exception has occurred. Program will exit.
:::

类加加载器，不重启JVM，替换调已经加载的类。


# GC 垃圾回收器

map属于类维度的，不会被回收

Full GC 的时间和次数是管理java的应用服务不得不考虑的问题


Minor GC：从年轻代空间（包括 Eden 和 Survivor 区域）回收内存被称为 Minor GC。

Major GC 是清理老年代。

Full GC 是清理整个堆空间—包括年轻代和老年代。

 

对象优先在Eden区分配:

    HotSpot JVM把年轻代分为了三部分：1个Eden区和2个Survivor区（分别叫from和to）。默认比例为8：1。大多数情况下，对象优先在Eden区中分配。当Eden区中没有足够空间进行分配时，将会触发一次Minor GC。

大对象直接进入老年代：
    所谓的大对象是指，需要大量连续内存空间的Java对象。例如：很长的字符串或者数组。虚拟机提供了一个-XX：PretenureSizeThreshold参数。令大于这个-XX：PretenureSizeThreshold设置值的对象，直接在老年代分配。

长期存活的对象将进入老年代：
    虚拟机为了分代收集，对每一个对象定义了一个对象年龄计数器（Age）。如果对象在Eden出生，并且经过一次Minor GC后，仍然存活并且能被Survivor区中每熬过一次Minor GC，，年龄就会增加1岁。当年龄增加到默认的15岁时，就会晋升到老年代。

    晋升为老年代的阙值通过参数-XX：MaxTenuringThreshold设置。


许多 Major GC 是由 Minor GC 触发的，所以很多情况下将这两种 GC 分离是不太可能的。

这使得我们不用去关心到底是叫 Major GC 还是 Full GC，大家应该关注当前的 GC 是否停止了所有应用程序的线程，还是能够并发的处理而不用停掉应用程序的线程。


每次服务停止的时候，都会报这个警告

Java HotSpot(TM) 64-Bit Server VM warning: UseCMSCompactAtFullCollection is deprecated and will likely be removed in a future release.
Java HotSpot(TM) 64-Bit Server VM warning: CMSFullGCsBeforeCompaction is deprecated and will likely be removed in a future release.


当内存大小不足时，则会启动GC线程并停止应用线程

Minor GC触发条件：当Eden区满时，触发Minor GC。

Full GC触发条件：老年代空间不足; 通过Minor GC后进入老年代的平均大小大于老年代的可用内存


## Minor GC 或 Young GC

从年轻代空间（包括 Eden 和 Survivor 区域）回收内存被称为 Minor GC。每次 Minor GC 会`清理年轻代的内存`。

- 当 JVM 无法为一个新的对象分配空间时会触发 Minor GC

- 执行 Minor GC 操作时，不会影响到永久代。

## Major GC 或 

Major GC is cleaning the Tenured space。Major GC 是清理老年代。

Minor GC触发Major GC

## Full GC

Full GC is cleaning the entire Heap – both Young and Tenured spaces.

Full GC 是清理整个堆空间—包括年轻代和老年代。


java.lang.OutOfMemoryError: PermGen space

元空间与永久代的区别？？