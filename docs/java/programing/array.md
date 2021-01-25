# Java中的数组

## 数组类型

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