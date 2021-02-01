# 异常类基础

**非正常情况在Java中统一被认为是异常，Java使用异常机制来统一处理**

- **异常发生点后的代码都不会被执行**
- 异常是相对于return的一种退出机制
- 异常可以由系统出发也可以由throw触发

## throw与return的对比

- return代表正常退出
- throw代表异常退出

return的返回位置是正确的，就是上一级调用者，而throw后执行哪行代码则是不确定的，有异常机制动态确定。

## 默认异常处理机制

1. 首先创建一个异常对象
2. 然后从当前函数查找谁能处理这个异常
3. 当前函数没有就查看上一层，一直到主函数
4. Java启用默认异常处理机制，打印异常栈信息
5. 退出程序

## 异常类

### Throwable

**所有异常类都有一个父类Throwale**

1. 构造方法

```java
public Throwable() {
    fillInStackTrace();
}

public Throwable(String message) {
    fillInStackTrace();
    detailMessage = message;
}

public Throwable(String message, Throwable cause) {
    fillInStackTrace();
    detailMessage = message;
    this.cause = cause;
}

public Throwable(Throwable cause) {
    fillInStackTrace();
    detailMessage = (cause==null ? null : cause.toString());
    this.cause = cause;
}

protected Throwable(String message, Throwable cause,
                    boolean enableSuppression,
                    boolean writableStackTrace) {
    if (writableStackTrace) {
        fillInStackTrace();
    } else {
        stackTrace = null;
    }
    detailMessage = message;
    this.cause = cause;
    if (!enableSuppression)
        suppressedExceptions = null;
}
```

异常可以形成一个异常链，上层的异常由底层异常触发，case表示底层异常。

**每个构造行数都有一个fillInStackTrace()方法，会将异常栈信息保存下来。**

### 异常类体系

以Throwable为根，表示所有异常的基类。两个子类：`Exception`和`Error`

下面图片异常类没有完全列举

![zg4IWr](https://image.hualihai.cn/blog/zg4IWr.png)

- Error

Error表示系统错误或资源耗尽，由Java系统自己使用，应用程序不应该抛出和处理。

- Excepiton

Exception表示应用程序错误。

## 受检异常与未受检异常

**RuntimeException比较特殊，名字有误导，其他异常也是运行时异常，实际的含义是未受检异常**

相对而言，Exception的其他子类和Exception自身则是受检异常。

受检和未受检的区别在于Java如何处理。对于受检异常，Java会强制要求进行处理，否则会有编译错误。而对于非受检异常则没有这个要求。

受检异常必须出现在throws语句中，调用者必须处理，Java编译器会强制这一点。而未受检异常则没有这个要求。

未受检异常异常表示编程的逻辑错误，编程时应该检查以避免这些错误。受检异常表明程序本身没有问题，但由于I/O，网络等其他不可预测的错误导致的异常。