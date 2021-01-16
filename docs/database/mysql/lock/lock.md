# MySQL中的锁

::: tip
锁是计算机协调多个进程或线程并发访问某一资源的机制
:::

悲观锁 乐观锁 是一种思想。可用在数据库上，Java中，框架中都有

如何保证数据并发访问的一致性？

## 为什么MySQL中使用了锁

## 锁机制

行锁
表锁
读锁
写锁

悲观锁：操作之前先上锁，悲观锁会影响系统效率吗？
乐观锁，大多是基于数据版本（ Version ）记录机制实现

数据库的acid属性

## MySQL中的锁

### 悲观锁 - Pessimistic Concurrency Control

for update 是悲观锁, 悲观锁是对数据被的修改持悲观态度, 认为数据在被修改的时候一定会存在并发问题.

悲观锁的实现，往往依靠数据库提供的锁机制。

for update叫排它锁，是一种**行级锁** 行锁永远是独占方式锁。当一个事务未完成时，其他事务可以读取但是不能写入或更新。
```sql
SELECT * FROM `sys_portal_user_role` for update
```

```sql
//step1: 查出商品状态
select quantity from items where id=100 for update;
//step2: 根据商品信息生成订单
insert into orders(id,item_id) values(null,100);
//step3: 修改商品的库存
update Items set quantity=quantity-2 where id=100;
```

### 乐观锁

乐观锁（ Optimistic Locking ）相对悲观锁而言，乐观锁假设认为数据一般情况下不会造成冲突，所以在数据进行提交更新时才会对数据的冲突与否进行检测。

就是 CAS 操作

类似于Git操作，修改某个文件，只有提交的时候才校验版本。

使用场景：发生冲突的概率比较低，并发量小

实现方式：版本号

- 添加version字段

- 当读取数据时，连同这个 version 字段一起读出

- 数据每更新一次就将此值加一

- 当提交更新时，判断数据库表中对应记录的当前版本号是否与之前取出来的版本号一致，一致则更新

```sql
//step1: 查询出商品信息
select (quantity,version) from items where id=100;
//step2: 根据商品信息生成订单
insert into orders(id,item_id) values(null,100);
//step3: 修改商品的库存
update items set quantity=quantity-1,version=version+1 where id=100 and version=#{version};
```

### 总结

悲观锁	乐观锁
概念	查询时直接锁住记录使得其它事务不能查询，更不能更新	提交更新时检查版本或者时间戳是否符合
语法	select ... for update	使用 version 或者 timestamp 进行比较
实现者	数据库本身	开发者
适用场景	并发量大	并发量小
类比Java	Synchronized关键字	CAS 算法