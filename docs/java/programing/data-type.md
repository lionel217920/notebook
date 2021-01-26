# Java中的数据类型

## 数据类型

**Java是一种强语言类型** 必须为每一个变量声明一种类型

在Java中一共有八种数据类型，其中有4种整型，2种浮点型，1种字符型，一种boolean类型。

**除了基本数据类型，其他都是对象类型。**

### 整型

- Java中整型的范围与运行Java代码的机器无关。

- C和C++中需要针对不同的处理器选择最为高效的整型，在32位处理器上运行很好的C程序在16位系统上运行会发生整数溢出。

| 类型 | 存储需求 | 取值范围 |
| :---- | :----- | :---- |
| int | 4字节 | -2 147 483 648 ~ -2 147 483 647（超过20亿） |
| short | 2字节 | -32 768 ~ 32 767 |
| long | 8字节 | -9 223 372 036 854 775 808 ~ 9 223 372 036 854 775 807 |
| byte | 1字节 | -128 ~ 127 |

**数字默认类型是int类型**

### 浮点类型

浮点类型用于表示有小数部分的数值。Java中有两种浮点类型。

| 类型 | 存储需求 | 取值范围 |
| :---- | :----- | :---- |
| float | 4字节 | 大约±3.402 823 47E+38F（有效位数为6~7位） |
| double | 8字节 | 大约±1.797 693 134 862 315 70E+308 （有效位数为15位） |

- double表示的数值精度是float类型的两倍（double称之为双精度数值）
- 绝大部分程序采用double类型，float类型的精度很难满足需求
- **没有后缀F的浮点数值默认是double类型**

三种特殊的浮点数值

1. 正无穷大
2. 负无穷大
3. NaN(不是一个数字)

check whether x is not a number

```java
if (Double.isNaN(b)) {

}
```

浮点数值不适用于无法接受舍入误差的金融计算中，如下代码

```java
    public static void main(String[] args) {
        double a = 2.0;
        double b = 1.1;
        System.out.print(a - b);
    }
```

输出结果为：**0.8999999999999999**

这种舍入误差的原因是因为：**浮点数值采用二进制系统表示，而在二进制系统中无法精确的表示分数十分之一。**

如果在数值计算中不允许有任何舍入误差，就要使用`BigDecimal`类。

### char类型

字符类型char用于表示一个字符，这个字符可以是中文字符，也可以是英文字符。

**char占用的内存空间是两个字节**

### boolean类型

boolean（布尔）类型有两个值：false和true。

**boolean类型占几个字节，依赖于JVM**

boolean: The boolean data type has only two possible values: true and false. Use this data type for simple flags that track true/false conditions. This data type represents one bit of information, **but its "size" isn't something that's precisely defined.**

In Oracle’s Java Virtual Machine implementation, **boolean arrays in the Java programming language are encoded as Java Virtual Machine byte arrays, using 8 bits per boolean element**

Although the Java Virtual Machine defines a boolean type, it only provides very limited support for it. There are no Java Virtual Machine instructions solely dedicated to operations on boolean values. Instead, expressions in the Java programming language that operate on boolean values are compiled to use values of the Java Virtual Machine int data type

The Java Virtual Machine encodes boolean array components using 1 to represent true and 0 to represent false . Where Java programming language boolean values are mapped by compilers to values of Java Virtual Machine type int , the compilers must use the same encoding

1. 无论boolean占用多少字节，只有1bit的值是有意义的
2. boolean类型被编译成int类型来使用，占4个byte
3. 在Java虚拟机里，1表示true ，0表示false
4. boolean类型的数组时，boolean在JVM中占一个字节

另外注意的地方：

- 在Java中整型值不布尔值不能相互转换。
- 在C++中数值可以代替布尔值。

## 变量

**变量的概念：**

为了操作数据，需要把数据放到内存中。所谓内存在程序看来就是一块有地址编号的连续空间，数据放到内存中的某个位置后，为了方便地找到和操作这个数据，需要给这个位置起一个名字。编程语言通过**变量**来表示这个过程。

变量的值可以改变，但变量的名字是不变的。**变量就是给数据起名字，方便找不同的数据，它的值可以变，但含义不变。**

在Java中每个变量都有一个类型(type)。**声明一个变量后，必须使用赋值语句对变量进行显示初始化**

错误示例：

```java
int day;
System.out.println(day);
```

- 变量的声明尽可能靠近变量第一次使用的地方，一种良好的代码编写风格
- 可以先声明变量，随后再进行赋值

## 常量

在Java中利用关键字`final`指示常量。

关键字`final`表示这个常量只能被赋值一次，一旦赋值之后就不能再改了

在虚拟机层面对`final`关键字做了哪些优化？？？？？

## 数值类型之间的转换

- 6个实心箭头 - 表示无信息丢失转换
- 3个虚心箭头 - **表示有可能有精度丢失**

![s0Ni52](https://image.hualihai.cn/blog/s0Ni52.png)

```java
int n = 123456789;
float f = n; // f is 1.1234567892E8
```

## 强制类型转换

int类型的值将自动地转换为double类型。有时也需要将double类型转换为int类型。在Java中允许这种数值之间的类型转换。

**需要通过强制类型转换(cast)实现这个操作**

- 可能会丢失一些精度
- 超出目标类型值的范围会得到完全不同的值

```java
double x = 9.97;
int nx = int (x); // nx is 9
```

```java
byte a = (byte) 300; // a is 44
```

