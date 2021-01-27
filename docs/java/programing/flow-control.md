# Java中的流程控制

Java使用条件语句和循环结构确定控制流程。

## 块作用域

由大括号括起来的若干条简单的Java语句。

```java
public static void main(String[] args) {
    byte a = 1;
    byte b = 127;
    byte c = (byte)(a + b);
    char d = '刘';

    {
        int g = 10;
    }

    System.out.print(Integer.toBinaryString(d));
}
```

## 条件语句

- 建议所有if后面都加括号
- 注意if/else的判断顺序
- 三元运算符可以使用if/else代替

**if实现原理**

**程序最终都是一条条的指令**

CPU有一个指令指示器，指向下一条要执行的指令，CPU根据指令指示器的指示加载指令并执行。

其中有一些特殊的指令：**跳转指令**

**跳转指令**会修改指令器指示器的值，让CPU跳到一个指定的地方执行。跳转有两种：**一种是条件跳转，一种是无条件跳转**

```java
int a = 10;
if (a%2 == 0) {
    System.out.println("偶数";
}
// 其他代码
```

```java
int a = 10;
条件跳转：如果a%2==0,跳转到第4行
无条件跳转：跳转到第7行
if (a%2 == 0) {
    System.out.println("偶数";
}
// 其他代码
```

## 多重选择语句

- **switch性能更高(使用跳转表)**
- 可能会出发多个case，一定记得要写break

switch表达式的类型

- byte
- short
- int
- char
- 枚举
- String (Java7支持)

**swith实现原理**

switch的转换和具体系统实现有关。

- 如果分支比较少，可能会转换为跳转指令
- 如果分支比较多，会使用跳转表

**跳转表**

跳转表是一个映射表，存储了可能的值以及要跳转到的地址。

跳转表的高效在于，因为其值必须是整数，且按大小顺序排序，可以使用高效的**二分查找**。

如果值是连续的，跳转表还会优化成数组。

**注意点：**

- String用于switch时也会转成整数，通过hashcode转换
- 不可以使用long型，因为跳转表值的存储空间为32位

日常采坑记录：

```java{4}
Map<Integer, Integer> map = orderService.findOrderCountByUserId(userId);
map.forEach((type , count) -> {
    switch (type) {
        case OrderStatusType.WAITING_DELIVERED.value():
            break;
    }
});
```

## 循环语句

在Java中循环有四种形式：

- while
- do-while
- for
- for-each

**while**

```java
while(条件语句) {
    代码块
}
```

**do-while**

代码块都会至少执行一次

```java
do {
    代码块
}while(条件语句)
```

**for**

应用最广泛的循环语法

```java
for(初始化语句; 循环语句; 歩进操作){
    循环体
}
```

控制流程如下：

1. 执行初始化指令
2. 检查循环条件是否为true，如果为false，则跳转到第6歩
3. 循环条件为真，执行循环体
4. 执行步进操作
5. 步进操作执行完后，跳转第2步，继续检查循环条件
6. for循环后面的语句

**死循环**

```java
for(;;) {

}
```

**for-each**

```java
int[] arr = [1,2,3,4];
for (int e : arr) {
    System.out.println(e);
}
```

## 终端流程控制语句

**break**

break用于提前结束循环。

**带标签的break**

用于跳出多重嵌套循环

**continue**

continue语句会跳过循环体中剩下的代码，然后执行步进操作

**实现原理**

同if原理一样，使用条件转移和无条件转移指令实现。