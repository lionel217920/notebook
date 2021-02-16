# Java中的代理

提供了对目标对象的间接访问方式，即通过代理访问目标对象。通过字节码增强对方法进行拦截增强，以便于增加需要的额外处理逻辑

使用代理的好处：

- 可以隐藏目标对象的实现

- 可以实现客户与目标对象之间的解耦

## Java静态代理

定义接口和接口实现，再定义接口的代理对象，将接口注入到代理对象中，然后通过代理对象去调用真正的实现类。

```java
public interface StaticService {

    String sayHello(String userName);
}
```

```java
public class StaticServiceImpl implements StaticService {

    @Override
    public String sayHello(String userName) {
        return "Hello " + userName;
    }
}
```

```java
public class StaticServiceProxy implements StaticService {

    private StaticService service = new StaticServiceImpl();

    @Override
    public String sayHello(String userName) {
        System.out.println("代理类包装一下");
        return service.sayHello(userName);
    }
}
```

**静态代理只能代理一个类服务，如果需要代理的类很多，就需要大量编写代理类，比较繁琐。**

## Java动态代理

https://www.jianshu.com/p/c1bfca9e46bc

所谓的动态代理就是想办法根据接口或者目标对象计算出代理类的字节码然后加载进JVM中。

## JDK动态代理

**通过接口实现的动态代理**

## CGLIB动态代理

**针对类来实现代理的，当只有类没有接口的时候就需要使用CGLIB动态代理**

## JDK VS CGLIB