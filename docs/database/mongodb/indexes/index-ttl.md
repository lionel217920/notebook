# TTL indexes

https://blog.csdn.net/jianlong727/article/details/54631124

TTL indexes 是特殊的单一属性索引。

automatically remove documents from a collection after a certain amount of time or at a specific clock time。

可以自动的从集合中移除文档，在一定数量时间之后或者在一个特定的时间点。

## 实现原理，mongo是如何实现自动删除的

据说是后台有个单线程，一直查询


## 创建TTL索引

```sh
db.autoCrawlResult.createIndex( { "createdTime": 1 }, { expireAfterSeconds: 3600 } )
```