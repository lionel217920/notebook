# 模拟公司内网开发环境

## ZooKeeper集群环境搭建

1. 机器部署 - **三节点**，每台机器要安装JDK8

- 172.16.203.150
- 172.16.203.151
- 172.16.203.152

2. 编辑配置文件

```conf
# The number of milliseconds of each tick
tickTime=2000
# The number of ticks that the initial 
# synchronization phase can take
initLimit=10
# The number of ticks that can pass between 
# sending a request and getting an acknowledgement
syncLimit=5
# the directory where the snapshot is stored.
# do not use /tmp for storage, /tmp here is just 
# example sakes.
dataDir=/home/lionel/data/zookeeper
# the port at which the clients will connect
clientPort=2181
# the maximum number of client connections.
# increase this if you need to handle more clients
#maxClientCnxns=60
#
# Be sure to read the maintenance section of the 
# administrator guide before turning on autopurge.
#
# http://zookeeper.apache.org/doc/current/zookeeperAdmin.html#sc_maintenance
#
# The number of snapshots to retain in dataDir
#autopurge.snapRetainCount=3
# Purge task interval in hours
# Set to "0" to disable auto purge feature
#autopurge.purgeInterval=1

## Metrics Providers
#
# https://prometheus.io Metrics Exporter
#metricsProvider.className=org.apache.zookeeper.metrics.prometheus.PrometheusMetricsProvider
#metricsProvider.httpPort=7000
#metricsProvider.exportJvmInfo=true

server.1=172.16.203.150:3333:3334
server.2=172.16.203.151:3333:3334
server.3=172.16.203.152:3333:3334
```

3. 创建myid

```
vim /home/lionel/data/zookeeper
```

输入数字标识，每个节点id不一致即可

3. 配置环境变量

```bash
vim .bash_profile
export ZOOKEEPER_HOME=$HOME/apache-zookeeper-3.6.2-bin
export PATH=$ZOOKEEPER_HOME/bin:$PATH
```

![hawzdr](https://image.hualihai.cn/blog/hawzdr.png)

4. 启动服务与检查

```bash
zkServer.sh start
netstat -an | grep 2181
```

5. 开放防火墙端口

```bash
firewall-cmd --zone=public --add-port=2181/tcp --permanent 
firewall-cmd --zone=public --add-port=3333/tcp --permanent 
firewall-cmd --zone=public --add-port=3334/tcp --permanent 
firewall-cmd --reload
```

## Canal集群环境搭建

1. 机器部署 - **两节点**

- 172.16.203.150
- 172.16.203.151

2. 


## Redis集群环境搭建

