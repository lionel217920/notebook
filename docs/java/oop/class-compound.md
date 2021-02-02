# 类的组合

## 内存分布

`Line`的连个实例成员都是引用类型，引用实际的`Point`

```java
public void test() {
    Point start = new Point(2, 3);
    Point end = new Point(3, 4);
    Line line = new Line(start, end);
    System.out.println(line.length());
}
```

内存分布如下

**栈**

| 名称 | 地址 | 内容|
| :--- | :----| :---- |
| start | 0x8000 | 0x1000 |
| end | 0x8008 | 0x1008 |
| line | 0x8010 | 0x1010 |

**堆**

| 名称 | 地址 | 内容|
| :--- | :----| :---- |
| start.x | 0x1000 | 2 |
| start.y | 0x1004 | 3 |
| end.x | 0x1008 | 3 |
| end.y | 0x100C | 4 |
| line.start | 0x1010 | 0x1000 |
| line.end | 0x1014 | 0x1008 |

start，end，line三个引用类型变量分配在栈中，保存的是实际的地址。实际内容保存在堆中，**line的两个实例变量start和end还是引用，同样保存的实际内容的地址。**

## 类加载和执行顺序

1. Point静态初始化代码块
2. Point初始化代码块
3. Point构造方法
4. Point初始化代码块
5. Point构造方法
6. Line静态初始化代码块
7. Line初始化代码块
8. Line构造方法