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

## 引用自己

定义一个`Person`类

```java
public class Person {

    private String name;

    private Person father;

    private Person mother;

    private Person[] children;
}
```

测试代码

```java
public void test() {
    Person father = new Person("father");
    Person son = new Person("son");
    son.setFather(father);
    father.setChildren(new Person[]{son});
    System.out.println(son.getFather().getName());
}
```

内存分布和上面基本一样，注意数组那块

**栈**

| 名称 | 地址 | 内容|
| :--- | :----| :---- |
| son | 0x8000 | 0x1000 |
| father | 0x8008 | 0x1010 |

**堆**

| 名称 | 地址 | 内容|
| :--- | :----| :---- |
| son.name | 0x1000 | son |
| son.father | 0x1004 | 0x1010 |
| son.mother | 0x1008 | null |
| son.children | 0x100C | null |
| father.name | 0x1010 | father |
| father.father | 0x1014 | null |
| father.mother | 0x1018 | null |
| father.children | 0x101C | 0x1020 |
| father.children[0] | 0x1020 | 0x1000 |

## 类中包含对象

定义了一个`ShapeManager`类，包含`Shape`对象

```java
public class ShapeManager {

    private Shape shape = new Shape();

    //private Shape shape;

    private Shape[] shapes = new Shape[MAX_NUM];
}
```

测试类

```java
public static void test() {
    ShapeManager manager = new ShapeManager();
}
```

代码执行顺序

1. ShapeManager静态初始化代码块
2. Shape静态初始化代码块
3. Shape初始化代码块
4. Shape构造方法
5. ShapeManager初始化代码块
6. ShapeManager构造方法

先加载`ShapeManager`类，然后加载`Shape`类，**注意的是，先执行`Shape`的初始化操作，后执行`ShapeManager`的初始化操作**。

需要注意的是，类中如果只含有对象数组，代码的执行顺序

1. ShapeManager静态初始化代码块
2. ShapeManager初始化代码块
3. ShapeManager构造方法

**如果一个类中创建了一个对象数组，这个对象的类并没有被加载，也没有被初始化。这是为什么？**

**如果一类中只声明了一个对象的引用，这个对象的类不加载，这个对象也不会创建。**
