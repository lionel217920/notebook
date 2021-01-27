# Java中函数调用基本原理

使用函数来减少重复代码和分解复杂造作。Java中的函数一般叫做方法。

通过函数来减少重复代码，分解复杂操作是计算机程序的一种重要思维方式。

## 函数基本概念

```java
修饰符 返回值类型 函数名称(参数类型 参数名称, ...) {
    操作
    return 返回值;
}
```

函数的组成部分有一下几种：

1. 修饰符
2. 返回值，没有返回值则是void
3. 函数名称
4. 参数，0个或多个
5. 操作

**定义函数本身不会执行任何代码，函数要被执行，需要被调用**

## 参数传递

**参数传递实际上是给参数赋值**

定义函数时声明参数，实际上就是定义变量，只是这些变量的值是未知的，调用函数时传递参数，实际上就是给函数中的变量赋值。

**参数与变量**

A parameter is a variable in a method definition. 参数是一个方法所定义的变量。

Argument is the actual value of this variable that gets passed to function. 变量是传给方法的实际数据。

```java
int max(x, y);
```

其中x, y 为参数

When a method is called, the arguments are the data you pass into the method's parameters.

在调用一个方法时，变量是你传给方法所定义的参数的数据。

## 理解函数

1. 特殊类型参数数组

基本类型不会对调用者中的变量造成任何影响，但是数组不是。**在函数内修改数组中的元素会修改调用者中的数据**。

```java
public static void reset(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        arr[i] = i;
    }
}

public static void main(String[] args) {
    int[] arr = {10, 20, 30, 40};
    reset(arr);
    for (int i = 0; i < arr.length; i++) {
        System.out.print(i);
    }
}
```

**因为给数组变量赋值不会影响原有的数组内容，只会让数组变量指向一个不同的数组的内容空间。**

2. 可变长度参数

可变长度参数可以看做是一个数组。

**可变长度参数必须是参数列表中的最后一个，一个函数只能有一个可变长度的参数**

```java
public static int max(int min, int ... a) {
    int max = min;
    for (int i = 0; i < a.length; i++) {
        if (max < a[i]) {
            max = a[i];
        }
    }
    return max;
}
```

3. 理解返回值

- return可以用于函数内的任何地方
- 函数返回类型为void也可以使用return

4. 函数重载

**同一个类中函数名相同但参数不同的现象，一般称为函数重载**

Java编译器会自动寻找最匹配的函数。

## 函数调用原理

### 栈的概念

**栈是一块内存，但它的使用有特别的约定，一般是先进后出**，栈底的内存地址是最高的，栈顶的内存地址是最低的。

计算机系统主要使用栈来存放函数调用过程中需要的数据：

- 参数
- 返回地址
- 函数内定义的局部变量

**返回值存在一个专门的返回值存储器中！！！**

### 函数执行原理 - 基本数据类型

```java
public static int sum(int a, int b) {
    int c = a + b;
    return c;
}

public static void main(String[] args) {
    int d = FunctionExample2.sum(1, 2);
    System.out.print(d);
}
```

1. main函数调用sum函数之前内存

| 地址 | 内存 |
| :---- | :----- |
| 0x7FF4 | |
| 0x7FF8 | |
| 0x7FFC | d |
| 0x8000 | args |

栈中只存放了两个变量args和d

2. 执行到sum函数内部，返回之前

| 地址 | 内存 |
| :---- | :----- |
| 0x7FEC | c(3) |
| 0x7FF0 | main下一条指令地址 |
| 0x7FF4 | 2(b) |
| 0x7FF8 | 1(a) |
| 0x7FFC | d |
| 0x8000 | args |

调用sum函数时将参数入栈，将返回地址入栈，然后跳转到sum函数内部，为局部变量c分配内存空间。

3. sum函数返回之前，返回值保存到专门的返回值存储器中。

4. 调用return后，程序会跳转到栈中保存的返回地址，也就是main的下一条指令。

5. sum函数的数据会出栈

6. 从专门的返回值存储器中获得返回值，赋值给d

**函数中的参数和函数内定义的变量，都分配在栈中，这些变量只有在函数调用的时候才分配，在调用结束时就背释放了。**

### 函数执行原理 - 数组的对象

**数组和对象类型都有两块内存，一块存放实际内容，一块存放实际内容的地址。** 

**实际的内容空间不是分配在栈上，而是分配在堆上，存放地址的空间是分配在栈上的。**

```java
public static int max(int min, int ... a) {
    int max = min;
    for (int i = 0; i < a.length; i++) {
        if (max < a[i]) {
            max = a[i];
        }
    }
    return max;
}

public static void main(String[] args) {
    int[] arr = new int[]{2, 3, 4};
    int ret = max(0, arr);
    System.out.print(ret);
}
```

![Gal6nS](https://image.hualihai.cn/blog/Gal6nS.png)

注意

当main函数执行结束，栈空间没有变量指向堆空间的数组时，Java系统会自动进行垃圾回收，从而释放这块空间。


### 递归调用原理

```java
public static int factorial(int n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

public static void main(String[] args) {
    int ret = factorial(4);
    System.out.print(ret); // print is 24
}
```

![50zdcv](https://image.hualihai.cn/blog/50zdcv.png)

1. f(0)的返回值1
2. f(0)返回到f(1)，f(1)执行1*f(0)，结果是1
3. f(1)返回到f(2)，f(2)执行2*f(1)，结果是2
4. f(2)返回到f(3)，f(3)执行3*f(2)，结果是6
5. f(3)返回到f(4)，f(4)执行4*f(3)，结果是24

### 总结

函数调用主要是通过栈来存储相关的数据，系统就函数调用者和函数如何使用栈做了约定，返回值是通过一个专门的返回值存储器存储的。

**调用是有成本的，每一次调用都需要分配额外的栈空间用于存储参数，局部变量以及返回值地址，需要进行额外的入栈和出栈操作。**