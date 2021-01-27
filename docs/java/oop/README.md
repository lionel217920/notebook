# object-oriented programming

## 面向对象三大特性
封装，继承，多态


多态：

## 面向对象五大原则


重写构造函数，是不是要保留默认的


父类中的方法，子类重写，对象参数也有值
父类方法中private，子类不能重写，
protected和public的区别？

```java
protected VerifyParams getVerifyParam(OrderGoodsDetailVo orderGoodsDetailVo, Goods goods) {
    PlatFormTypeEntity platFormTypeEntity = PlatformUtils.cartPlatformByOrderGoods(orderGoodsDetailVo);
    OrderGoods orderGoods = orderGoodsDetailVo.getOrderGoods();

    // 匹配参数
    VerifyParams verifyParams = new VerifyParams();
    verifyParams.setTransportCompany(company().code());
    verifyParams.setPlatform(platFormTypeEntity.getPlatformName());
    verifyParams.setCategoryId(goods.getCategoryId());
    // 校验参数
    verifyParams.setCommodityName(goods.getCommodityName());
    verifyParams.setSpec(goods.getSpecs());
    verifyParams.setBrand(goods.getBrandName());
    verifyParams.setCapacity(goods.getForecastContent());
    verifyParams.setSkuDescr(orderGoods.getGoods().getSkuDescr());
    String size = RegexUtils.findMatch(orderGoods.getGoods().getSkuDescr(), "([s|S]ize:.*?;)");
    verifyParams.setSkuSizeDescr(size);

    return verifyParams;
}
```

## 多态的实现机制

::: tip
父类或接口定义的`引用`指向子类或实现类的`实例对象`，而程序调用的方法在`运行时期`才动态绑定。
:::

## 多态机制实现的意义
在面向对象编程中(OOP)中，多态无疑是最具特色的功能。使用面向对象的语言编程和面向对象对象是两回事。

**Subtype polymorphism**

子类 VS 子类型
编译时多态 VS 运行时多态

## 类初始化流程
静态代码块，代码块


```java
List<HttpGoods> goodsList = recommendHttpGoods(recommendDto);
GoodsSearchResult searchResult = new GoodsSearchResult();
searchResult.setContent(goodsList);
```


参数定义成接口，两个不同的`model`实现接口，实现简单的适配器模式

# Aspect oriented programming
面向切面编程

aop in java

aop in spring

自定义注解 + aop


常用类

BigDecimal
