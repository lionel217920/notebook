# MySQL


## Order
Mysql order by specific ID values
Using Field() function, Which "Returns the index (position) of str in the str1, str2, str3, ... list

```sql
SELECT id,`name` FROM goods_item
WHERE id IN(268847144,269012452,269012018,189393787,269012192,269012191,269012014)
ORDER BY FIELD(id, 269012452,189393787,268847144,269012018,269012192,269012014,269012191)
```
If Not Order, default by ID DESC

唯一索引，商品ID+时间，保证数据的唯一性
如果没有唯一索引，多线程环境下会有重复的数据


like语句什么情况下走索引，如何看语句有没有执行索引？


并发插入数据？如何保证数据，并发更新话题的帖子数量，20个线程，总数还是20？？

MySQL删除数据，如果数据不存在，会执行吗？

MySQL更新数据，如果不存在，会执行吗？

执行计划分析语句


## MySQL单表最大可以承载多少数据？
跟表结构有关系，如果表字段很多，那么存储几千万数据就不行了。如果表结构只有两三个字段，比如状态，id，那么可以存储上亿的数据都没有问题。所以，在表设计阶段，一定要拆分业务功能，举个栗子

电商项目中的商品表，其字段少说有`60-70`个，放在一张表里难维护，随着业务量的增加页会对数据库造成压力。

## 如何拆分？
按照商品属性划分，价格，预报等


各个类型占几个字符？
varchar,int,text

调优
如何查看数据库连接池是否满了
连接池什么释放的

查询不走索引，很耗CPU。

设置字段为default value，如果属性中没有设置值，数据库中是null，这么说来default_value没有啥用。


排序字段为空的情况

排序字段为空的排在最后面,降序是这样,升序就不是了

升序的话想把空的排在最后面

```sql
SELECT id, `name`, type FROM `community_tag` ORDER BY type IS NULL ASC
```