数据库相关

# RDBMS
Relation DataBase Management System

保证数据唯一性，唯一索引


# NoSQL(Not Only SQL)

NoSQL database (called **Not Only SQL** database)

NOSQL DATABASE TYPE
- Document Databases
- Key-value stores

2019 Most Popular
- MongoDB
- Cassandra
- Redis
- HBase
- Neo4j
- Amazon DynamoDB
- Memcached

## 适用场景

## 相比RDBMS的优点与缺点

## 通用特性

## 如何正确的选择合适的NoSQL数据库


达到多少QPS上集群?????


## 数据库选型

### Elasticsearch + MySQL使用场景
在数据量很大或者需要`全文检索`，在商品库中使用了`MySQL + Canal + Elasticsearch`

> ES不支持事务，要先加一层关系型数据库。在涉及多表操作时无法保证事务的一致性。

> ES不支持自增(MySQL的累加操作)，涉及这类的操作要先经过MySQL，再做cannal监听同步至ES。

## MongoDB如何使用

!> 重要的数据用`MySQL`，不太重要的数据（丢失一条无所谓的数据，比如日志）

1. MongoDB适合存数据量大的数据？那和es相比的好处？

## Mysql
可以使用`goodsId`作为数据库主键，少一个索引，少占用空间。因为索引是要`占用磁盘空间`的。

如何查看磁盘IO使用情况？