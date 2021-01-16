# Predicate接口剖析

## 如何定义

> Represents a predicate (boolean-valued function) of one argument.

整合`Collection`接口中的`removeIf`方法，可以自定义一些过滤规则，过滤集合中的一些数据

过滤集合，并返回过滤的结果
```java
private static <T> List<T> removeList(List<T> originList, Predicate<T> predicate) {
    if (CollectionUtils.isEmpty(originList)) {
        return Collections.emptyList();
    }
    List<T> removeList = new ArrayList<>();
    originList.removeIf(t -> {
        if (predicate.test(t)) {
            removeList.add(t);
            return true;
        }
        return false;
    });
    return removeList;
}
```

使用predicate来解决包依赖问题,这个方法在模型里面,如果想要在里面判断用户是否登录,工具类在core里面,没有办法依赖

```java
    public void addAdd(PopAd popAd, Predicate<Boolean> predicate) {
        if (ads == null) {
            ads = new ArrayList<>();
        }
        if (popAd != null && !predicate.test(popAd.getLogin())) {
            ads.add(popAd);
        }
    }
```

```java
User user = UserServletUtils.user(false);
web.addAdd(popAd, b -> b.equals(user == null));
```

## JDK中的应用

collection中的removeIf()