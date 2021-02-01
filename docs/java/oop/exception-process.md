# 异常处理

**Java支持的异常处理包括：catch，throw，finally，try-with-resources，thorws**

## catch匹配

- 异常处理将根据抛出的异常类型找到第一个匹配的catch块
- 找到后不再执行其他catch块的代码
- 如果没有找到会继续到上层方法中查找
- **抛出的异常类型是catch中声明异常的子类也算匹配**
- 少用基类Exception

## 重新抛出异常

重新抛出异常的好处：

当前异常不太适合处理，需要抛出到上层处理。

## finally

**finally内的代码不管有无异常发生，都会执行。一般用于释放资源，数据库连接，文件流等**

- 如果没有异常发生，在try内的代码执行结束后执行
- 如果有异常发生且被catch捕获，在catch内的代码执行后再执行
- 如果有异常发生但没有被捕获，则在异常抛给上层之前执行

try/catch/finally语法中，catch不是必需的，可以只有try/finally

几个示例

1. 有异常发生没有被捕获，在异常抛给上层之前执行

```java
try {
    Integer a = Integer.parseInt("s");
} finally {
    System.out.println("finally 执行");
}
```

先执行finally，再打印堆栈信息。

2. try/catch里面有return语句

```java
int ret = 0;
try {
    Integer b = Integer.parseInt("s");
    return b;
} catch (NumberFormatException e) {
    System.out.println("catch 执行");
    return ret;
} finally {
    ret = 20;
    System.out.println("finally执行");
}
```

return语句在finally语句执行结束后才执行，**finally并不能改变返回值，返回的结果是0**

实际执行过程：

**在执行到try内的return语句时，会把返回值保存在一个临时变量中，然后才执行finally语句，最后try再返回那个临时变量**

3. finally中也有return语句

```java
int ret = 0;
try {
    int a = 5 / 0;
    return ret;
} finally {
    return 2;
}
```

- **try/catch的return语句会丢失，实际返回finally中的值**
- **try/catch内的异常会被覆盖，就像是异常没有发生一样**
- **finally中如果抛出异常，则原异常会被覆盖**
- **避免在finally中使用return语句**

## try-with-resources

Java7支持的一种新语法，针对使用资源的场景。针对了实现**java.lang.AutoCloseable**接口的对象。

```java
public static void useResources() throws Exception {
    try (AutoCloseable r = new FileInputStream("hello")) {
        // 使用资源
    }
}
```

资源r的声明在try内，不用再调用finally，在语句执行完会自动调用资源的close方法。

## throws

**throws跟在方法的括号外面，多个异常用逗号分隔，表明这个方法内可能会抛出异常，且没有对异常进行处理。**

- 对于未受检异常不要求使用throws进行声明
- 对于受检异常则必须进行声明
- 对于受检异常不可以抛出而不声明，但是声明可以不抛出
- 主要用于在父类方法声明

