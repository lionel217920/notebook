# Java中的数组

数组是一种数据结构，用来存储同一类型的集合。通过一个整数下标就可以访问数组中的元素。

**一旦初始化数组就不能改变长度了。**

## 数组初始化

基本类型的数组有三种赋类型：

```java
int[] arr = {1, 2, 3};
```

```java
int[] arr = new int[]{1,2,3};
``` 

```java
int[] arr = new int[3];
arr[0]=1; arr[1]=2; arr[2]=3;
```

第三种形式，即使没有给每个元素赋值，每个元素也都有一个默认值。**这个默认值跟数组类型有关系。**

- 数值类型默认值是0
- boolean值默认值是false
- char为空字符

**不能在给定初始值的同时给定长度**

```java
int[] arr = new int[3]{1, 2, 3};
```

## 数组内存分布

**数组类型和基本类型不同，数组在内存中有两块空间。** 一块用于存储数组内容本身，一块用于存储内容的位置。

基本数据类型如下

代码 | 内存地址 | 内存数据
:------ | :------ | :-------
int a = 100 | 1000 | 100 |

数组类型如下

代码 | 内存地址 | 内存数据
:------ | :------ | :-------
int[] arr = {1,2,3} | 2000 | 3000 |
| | 3000 | 1 |
| | 3004 | 2 |
| | 3008 | 3 |

**为什么数据要用两块内存空间？**

```java
int[] arrA = {1, 2, 3};
int[] arrB = {4, 5, 6, 7};
arrA = arrB;
```

如果arr对应的内存空间是直接存储数组的内容，那么就没有足够的空间去容纳arrB的所有元素。

用两块空间存储，arrA存储的值就变成了和arrB的一样，存储的都是数组内容{4, 5, 6, 7}的地址。

```java
{1, 2, 3};

arrA, arrB  ->    {4, 5, 6, 7};
```

{1, 2, 3}的内存空间不被再引用，将被垃圾回收。

**给数组中的元素赋值是改变数组的内容，而给数据变量赋值则会让变量指向一个不同的位置**

## 数组拷贝

Java中允许将一个数组变量拷贝给另一个数组变量。这时两个变量将引用相等。

```java
int[] arrA = {1 ,2, 3};
int[] arrB = {1, 2, 3};
System.out.print(arrB == arrA); // print is false;
```

```java
int[] arrA = {1 ,2, 3};
int[] arrB = arrA;
System.out.print(arrB == arrA); // print is true;
```

将一个数组的所有值拷贝到一个新数组中去，就要使用Arrays类中的copyOf方法

```java
int[] arrA = {1 ,2, 3};
int[] arrB = Arrays.copyOf(arrA, 3);
System.out.print(arrB == arrA); // print is false;
```

```java
int[] arrA = {1 ,2, 3};
int[] arrB = Arrays.copyOf(arrA, 3);
System.out.print(Arrays.equals(arrB, arrA)); // print is true;
```

## 数组排序

**快速排序算法**

```java
int[] arrC = {4, 7, 8 ,9, 2, 5};
Arrays.sort(arrC);
for (int i : arrC) {
    System.out.print(i);
}
```

## 多维数组