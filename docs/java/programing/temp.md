# Java基本程序设计

## 参数与变量

A parameter is a variable in a method definition.

参数是一个方法所定义的变量。

```java
int max(x, y);
```

其中x, y 为参数

When a method is called, the arguments are the data you pass into the method's parameters.

在调用一个方法时，变量是你传给方法所定义的参数的数据。

```java
int a = 1;
int b = 2;
max(a, b);
```

a,b 为变量

Parameter is variable in the declaration of function.

参数是方法定义中声明的变量。

Argument is the actual value of this variable that gets passed to function.

变量是传给方法的实际数据。

## 基本类型


String + long 输出

GOODS_DETAIL_URL + goodsId


基本数据类型，封装类型的使用注意哪些，封装类型，如果不传值，那么会出现空值。

## 创建数据


++i i++
```java
int pageNo = 0;
gc.setPageNo(++pageNo); pageNo = 0
```

Java语法糖

```java
boolean needHeader = Null;
```
param.needHeader为空

```java
public class Forward99979Param {
  private Integer withoutHead;
}

if (param.getWithoutHead() == 0) {

}
```
空指针异常，使用封装类型要注意为空的情况。
```java
if (param.getWithoutHead() != null && param.getWithoutHead() == 0) {
  
}
```

变量，表达式，语句，代码块，流程控制

long型 + String类型
https://bbs.csdn.net/topics/90329781



boolean值的一些问题，基本类型与封装类型的`自动拆箱`与`自动装箱`。

private Boolean addOn;

如果是返回boolean

会报空指针
```java
public boolean addOn() {
    return addOn;
```

```java
public boolean addOn() {
    if (addOn == null) {
      return false;
    }
    return addOn;
}

public boolean addOn() {
    return Boolean.TRUE.equals(addOn);
}
```

```java
Integer total = 99;

int a = total;
```

反编译来看，`Integer.valueOf()` `Integer.intValue()`


string + long
```java
CacheUtils.get(Constant.CACHE_KEY_CPS_CLASS + cid);
```

基本数据类型的封装类

Long类型里面有个比较的方法

```java
    public static int compare(long x, long y) {
        return (x < y) ? -1 : ((x == y) ? 0 : 1);
    }
```