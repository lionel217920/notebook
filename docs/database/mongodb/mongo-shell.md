---
sidebar: auto
---
# Mongo Shell

**mongo shell** 就是和MongoDB交互的JavaScript脚本，可以使用mongo shell查询或者更新数据。一旦安装并且启动了MongoDB，mongo shell就会连接到MongoDB实例。

## 使用mongo Shell 连接 MongoDB

### 准备工作
::: warning
在开始运行mongo shell之前，确认MongoDB正在运行
:::

打开终端然后进入`mongodb`安装目录下的`bin`目录
```sh
cd <mongodb installation dir>/bin
```
::: tip
将mongodb安装目录下的bin路径添加在环境变量中，就可以直接使用`mongo`，而不需要先进入安装路径下的bin目录
:::

### 连接本地默认端口的MongoDB实例
直接使用`mongo`shell连接`localhost`上默认端口`27017`的mongo实例
```sh
mongo
```
### 连接本地非默认端口的MongoDB实例
如果明确指定了端口号，在使用`mongo`时就加上`--port`选项，举个栗子，链接端口号为28015的MongoDB实例
```sh
mongo --port 28015
```
### 链接远端服务器上的MongoDB实例
通过`连接字符串`连接远程机器上的MongoDB实例
```sh
mongo mongodb://172.16.100.115:27017
```

通过命令行选项`--host <host>:<port>`
```sh
mongo --host 172.16.100.115:27017
```

通过命令行选项`--host <host>`和`--port <port>`
```sh
mongo --host 172.16.100.115 --port 27017
```

### 需要授权的MongoDB实例



## 使用mongo shell工作

### 操作数据库
显示当前你正在操作的数据库
```sh
db
```
显示当前用户下所有可使用数据库
```sh
show dbs
```
切换数据库
```sh
use <database>
```

### 格式化输出结果
```sh
db.getCollection('transportVerifyConfig').find().pretty();
```

###
