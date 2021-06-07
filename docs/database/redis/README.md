Features
- open source
- in-memory data structure store

Used
- database
- cache
- message broker

data structures
- strings
- hashes
- lists
- set
- zset

Install Redis From Source
- sudo tar -zxvf redis-5.0.3.tar.gz -C /usr/local
- cd redis-5.0.3/
- make
- make test
- make install

redis-cli -h 10.144.62.3 -p 30000


# Redis缓存
可以用来做重复校验

## Redis
命令
1. 查看key
GET crawler-server-90b9e52ed7262beadb5ad5fa97e3daab
2. exists
EXISTS crawler-server-90b9e52ed7262beadb5ad5fa97e3daab
3. DEL
DEL crawler-server-90b9e52ed7262beadb5ad5fa97e3daab

不可以存outputStream，要存byte[]数组


redis的三种模式

- 主从复制
- 哨兵模式
- redis-cluster集群


`redis-cli`命令行

```bash
redis-cli -h 172.16.100.100 -p 6379
```

出现错误提示，(error) MOVED 9331 172.16.100.101:6379，是没有用集群方式登录

```bash
redis-cli -c -h 172.16.100.100 -p 6379
```

出现错误提示，(error) NOAUTH Authentication required，需要密码

```bash
AUTH redis123
```





- 数据结构

- 底层数据实现

- 部署方式

- 缓存

  - 缓存异常
  - 旁路缓存

- 并发

  - 原子操作
  - 分布式锁

- 源码