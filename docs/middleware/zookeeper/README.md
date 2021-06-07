# ZooKeeper基础

::: tip
Zookeeper是一个开源`分布式`协调服务，分布式数据一致性解决方案。
:::
基于Zookeeper可实现命名服务，集群管理，Master选举，分布式锁。




应用场景：

- 分布式锁
- 选举
- 组成员管理
- master-worker协同服务（zk的watch机制）
- 分布式队列（临时有序节点）

文件系统数据模型

znode类型；

- 持久性的znode 宕机不会丢失
- 临时性的znode  客户端丢了就会释放
- 持久循序性的znode
- 临时顺序性的znode

watch机制:关心数据注册watch，不需要客户端不断轮训

分布式锁：

避免羊群效应：1号释放锁，2号获得锁，3号watch2号

注册和发现



