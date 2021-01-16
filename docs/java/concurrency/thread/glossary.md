线程通常都是由操作系统处理。

1. 线程都是随机执行。可以改变线程的执行顺序吗
2. 线程由哪个处理器执行也是随机的。多个处理器可以同时处理一个线程
3. 线程是交互运行的，也可以是同一时刻同时运行（多核CPU）

如果有一个线程，操作系统调度这个线程在一个处理器上执行。运行一小片时间段，就会暂停。在暂停的时候其他的线程就会得到机会执行。举个栗子，我们有一台双核四线程的机器，
https://www.quora.com/What-is-the-relationship-between-the-threads-in-Java-and-processors-How-are-the-threads-handled-by-processors-Consider-the-scenario-with-4-threads-in-2-processors


What is the difference between CPU core and thread?
Java中的线程与CPU内核的不同之处？
https://www.quora.com/What-is-the-difference-between-CPU-core-and-thread


Does a new thread in Java run on a different processor core?
一个新的线程会运行在不同的CPU处理器上吗？
https://www.quora.com/Does-a-new-thread-in-Java-run-on-a-different-processor-core
