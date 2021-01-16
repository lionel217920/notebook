# Java开发手册

## 架构上的注意事项
阿里巴巴开发手册，华为开发手册，海淘1号开发手册

### 模型层 Model

::: danger
模型不要引用第三方的东西，一般模型的依赖尽量简单，不要引用其他的依赖，公共的依赖可以。
:::

::: danger STOP
不能直接使用第三方的对象当做模型返回，要定义自己的模型(使用第三方模型可能导致序列化失败)
:::

模型maven的级别都是`provide`，外部不引用

错误示例：
`Aggregation`对象为第三方库，不应该放入模型中，不能暴露出去，不能使用getter/setter方法

优化：在业务方法中转化为自定义模型返回

```java{9}
public class AggResult implements Serializable {

    private static final long serialVersionUID = 1480134312366849187L;

    private long count;

    private String value;

    private Map<String, Aggregation> aggregationMap;

    public Map<String, Aggregation> aggregationMap() {
        return aggregationMap;
    }

    public void aggregationMap(Map<String, Aggregation> aggregationMap) {
        this.aggregationMap = aggregationMap;
    }
```

### 数据处理层

::: danger
Dao层的结果不要往外返回，应该在内部全部处理掉，然后转换成自定义模型返回给外部。外部Controller不应该知道是ES还是Mongo还是Mysql。
:::

否则外部controller里面还要处理第三方的东西。


### VO层处理

AppBuyActivity -> Activity，里面的url要保留，不要覆盖原来的URL，如果后面用到原始的URL怎么办


# 代码改进

## 命名规范

> 代码书写问题，方法名称规范，alarm里面不要有update的操作，要不就改成alarmAndUpdate

> 描述字段命名为statusDescr，Desc和数据库关键字冲突

> 注意事物的问题，刷新缓存和更新数据库在同一个事物里面，导致缓存刷新还是上一次的结果

> 这个枚举类名首字母改大写


## 异常和日志

> 日志打印，要打印异常堆栈

> 异常处理，什么时候捕获，什么时候抛出异常

## 代码逻辑问题

> if下不要包太长的代码，要先处理短的，后处理长的代码

> 改代码review看起来舒服，直观，别整的别人看不懂

> 对象.的时候一定要考虑，是否一定存在。啊啊啊～～～～

> 不使用的方法不要暴露出去，用private，不要声明在接口里，写在实现类里就好了。

> 如果有方法一定要执行，可以放在finally里面，捕获异常处理逻辑之后抛出异常，最后执行finally方法。

> 写代码原则，能不生成对象就不生成对象。

> 商品库的业务逻辑不要写在物流里面，耦合太大。


重构代码，先重构代码不改业务逻辑，重构之后再改业务代码，方便reviewer。

物流实体移动到CMS，因为是CMS保存的消息，还要依赖别的系统的实体类，这样耦合比较大。

内部系统调用使用`grpc`不要使用`http`

HttpServletRequest不要放在service，放在controller，跟controller绑定。HttpServletRequest就是Http接口有的，grpc没有。

参数校验做到最外层，防止service层里面，比如前一个操作成功了，第二个参数校验没过，效率不高，写接口的原则就是先校验参数



这种参数`categoryId`作为方法的入参，一定要判断是否为空，因为无法确定外部传过来的是什么值。
```java
@Override
public SiFangCategory findByCategoryId(Long categoryId) {
    if(categoryId == null) {
        return null;
    }
    return get(categoryId.toString());
}
```


社区表应该定义关联关系表，不应在帖子表里面定义

新商品详情页异步执行

看代码一定要仔细，看到每个方法里面去，不循环多余的函数

写接口的时候不要把实体类直接返回，要定义一个`vo`对象，入参的时候自定义个`dto`

使用重用对象，不new就不new

懒加载策略，用到的时候在写

```java
if (StringUtils.isBlank(postages[0].getTotal()) || StringUtils.isBlank(pdPostage.getTotal())) {
    return null;
}
Group group = new Group();
```

这种魔法值的地方或者特殊说明一定要写注释

```java
// 不判断库存的原因：显示的SKU都有库存。无库存的不在sku列表里。
productSku.id(skuId).inventory("-1").fill(fillMap);
```

```java
List<String> imageList = getImageList();

for (String image: imageList) {
    if (StringUtils.isNotBlank(image)) {
        // list中可能存在null值
    }
}
```

如果`cps.getType()`为空，会报空指针异常
```java
if (appType.value() == cps.getType()) {
    
}
```


文件夹命名，用`单数`还是`复数`，像`linux`中的文件夹，root, usr, bin, etc, home, var... 还是用简称吧

像这种过期时长定义成expiredSeconds或expiredMinutes这样可读性更好,expiredTime表示什么时间过期