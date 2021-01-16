如何加索引？
````
db.mapping.ensureIndex({"subscribeStatus":1})
````

````SHELL
mongo 172.16.100.115:27017  

show dbs  

use logistics  

show tables  

db.mapping.getIndexes()

````

The mongo shell
远程链接服务器上的数据库
```shell
mongo 172.16.100.115:27017
```

在 MongoDB 中，你不需要创建集合。当你插入一些文档时，MongoDB 会自动创建集合。

- 自动创建集合
- 字段也可以不一样

为什么会把对象序列化进去。

索引的创建


## 关于枚举类型保存到MongoDB
String也可以保存到记录中。

mongodb中的类型？

## MongoDB包下面的组件


MongoDB4.0加入了事务
