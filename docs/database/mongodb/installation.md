---
sidebar: auto
---

# Install MongoDB
MongoDB有两个版本：**Community-社区版** 和 **Enterprise-企业版**。一般都使用的是`社区版`，企业版有一些高级特性，技术支持比较好，其实差别不大，社区版足够使用。

## From an archive file

### Install MongoDB
::: warning
使用二进制安装文件，需要安装依赖
:::

```sh
yum install libcurl openssl
```
```sh
sudo apt-get install libcurl4 openssl
```

1. 下载二进制版本的MongoDB，[官网链接](https://www.mongodb.com/download-center/community)
2. 使用`tar`命令解压文件
```sh
tar -xzvf <tgz file>
```
3. 将解压出来的文件拷贝到MongoDB运行的目录
4. 添加环境变量  
MongoDB二进制文件在`bin`目录，确认其在`PATH`，修改
编辑`profile`文件，添加路径
```sh
sudo vim /etc/profile
export PATH=<mongodb-install-directory>/bin:$PATH
```

### Run MongoDB

::: warning
注意相关文件夹权限
:::
1. 创建数据文件夹  
在第一次启动之前，创建`mongod`进程将要写如数据的文件夹，默认路径`/data/db`，如果制定了其他文件夹，必须制定`dbpath`选项
```sh
mkdir -p /data/db
```
2. 设置文件夹权限  
启动`mongod`之前，确定当前账户有**读和写**这个文件夹的权限
3. 启动MongoDB  
通过`mongod`命令来启动MongoDB，特殊情况下还可以指定数据文件夹的路径

**通用情况**

如果`PATH`系统环境变量包含了`mongod`的二进制文件，并且使用默认的数据路径(/data/db)
```sh
mongod
```
**指定数据路径**
```sh
mongod --dbpath <path to data directory>
```
**指定mongod路径**
```sh
<path to binary>/mongod
```
4. 检验MongoDB是否启动成功，观察日志文件

> [initandlisten] waiting for connections on port 27017


## From Linux package manager

::: tip
使用Linux软件包管理器安装
:::
MongoDB针对不同的Linux发行版本，提供了官方支持的软件包。

包名称  |  说明
:----:   |:------:
mongodb-org  |  会自动安装如下四个包组件
mongodb-org-server  |  包含mongo进程，初始化脚本，配置文件(`/etc/mongod.conf`)
mongodb-org-mongos  |  包含mongo守护进程
mongodb-org-shell  |  包含mongo shell
mongodb-org-tools  |  包含一些mongo工具组件


### Install on Red Hat
::: warning
只支持64位操作系统
:::

> **使用.rpm包管理器，推荐的安装方式**

MongoDB软件包不存在CentOS默认的包仓库中。但是MongoDB需要一个专用的仓库，在这个仓库中提供了专门的包，首先要将它添加到服务器的仓库中。

```sh
sudo vi /etc/yum.repos.d/mongodb-org.repo
```
```sh
[mongodb-org-4.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc
```
在往下继续进行之前，先校验一下MongoDB仓库是否存在`yum`程序中。`repolist`命令显示了可用的仓库列表。

```sh
yum repolist
```
输出如下信息
![MongoDB repo](http://image.hualihai.cn/blog/348be742-54c4-42de-a481-211ffeeed505)

接下来使用yum安装MongoDB
```sh
sudo yum -y install mongodb-org
```

安装指定版本的MongoDB
```sh
sudo yum install -y mongodb-org-4.0.8 mongodb-org-server-4.0.8 mongodb-org-shell-4.0.8 mongodb-org-mongos-4.0.8 mongodb-org-tools-4.0.8
```

阻止`yum`自动升级MongoDB，在 **/etc/yum.conf** 添加排除指令
```sh
exclude=mongodb-org,mongodb-org-server,mongodb-org-shell,mongodb-org-mongos,mongodb-org-tools
```

### Install on Ubuntu
::: warning
只支持64位 LTS发型版本
:::
::: danger
必须升级 **glibc** 到2.23版本
:::
::: danger Important
Ubuntu提供的非官方的`mongodb`包与MongoDB官方支持的包有冲突，并且官方也不维护。所以使用MongoDB官方的`mongodb-org`包。  
:::

先查看系统是否安装Ubuntu提供的mongo包，然后卸载
```sh
sudo apt list --installed | grep mongodb
sudo apt remove mongodb
sudo apt-get purge mongo*
```

导入包管理系统使用的公钥，Ubuntu包管理系统(例如`dpkg`或者`apt`)要求供应商使用密钥签署软件包，从而确保软件包的一致性和真实性
```sh
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
```
![导入秘钥](http://image.hualihai.cn/blog/7d7729ca-aaac-4d87-9789-1464c804821e)

创建仓库文件，创建`/etc/apt/sources.list.d/mongodb-org-4.0.list`文件，添加如下信息
```sh
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
```

重新加载本地包仓库
```sh
sudo apt-get update
```

安装MongoDB软件包
```sh
sudo apt-get install -y mongodb-org
```

安装特殊版本的MongoDB
```sh
sudo apt-get install -y mongodb-org=4.0.8 mongodb-org-server=4.0.8 mongodb-org-shell=4.0.8 mongodb-org-mongos=4.0.8 mongodb-org-tools=4.0.8
```

![安装异常](http://image.hualihai.cn/blog/4cc64bc8-05c5-4efa-9012-d8b953ac7a47)

修复依赖关系
````sh
sudo apt install -f
````
再次执行`sudo apt-get install -y mongodb-org`

![安装截图](http://image.hualihai.cn/blog/8f066501-64ba-4d76-bb1f-548f0d2f672e)
系统会自动创建`mongodb`用户和用户组
![安装截图](http://image.hualihai.cn/blog/27e455bf-59dc-422b-826c-456425c0b7a3)


## Run MongoDB
默认情况下，MongoDB会使用`mongod`用户和一些默认的文件路径来运行

- /var/lib/mongo （数据文件夹）
- /var/log/mongodb （日志文件夹）

::: tip
如果使用包管理工具安装，默认文件夹都会创建，并且文件夹的用户和用户组的权限都是`mongod`
:::
::: warning
如果使用二进制包安装，不会创建数据文件夹和日志文件夹
:::

手动创建文件夹
```sh
mkdir -p /var/lib/mongo
mkdir -p /var/log/mongodb
```
默认情况下，MongoDB使用`mongod`用户来运行，修改文件夹权限
```sh
chown -R mongod:mongod <directory>
```

MongoDB包含了一个配置文件(`/etc/mongod.conf`),要想制定其他的日志或者数据文件路径，要修改配置文件

- `storage.dbPath` 指定了数据文件路径（**/some/data/directory**）
- `systemLog.path` 指定了日志文件路径（**/some/log/directory/mongod.log**）

::: warning
注意新文件夹权限，并重启服务
:::


## Procedure

启动`mongod`进程

```sh
sudo service mongod start
```

校验MongoDB是否启动成功，通过日志文件  **/var/log/mongodb/mongod.log**

> waiting for connections on port 27017

默认的端口号是27017，配置在  **/etc/mongod.conf**

设置开机启动

```sh
sudo chkconfig mongod on
```

重启MongoDB

```sh
sudo service mongod restart
```
通过观察日志（`/var/log/mongodb/mongod.log`）可查看执行的重要信息或错误信息。

停止Mongo服务

```sh
sudo service mongod stop
```

运行`mongo`命令连接本地默认端口27017的`mongod`服务
```sh
mongo
```

## Uninstall MongoDB
::: danger
全卸载MongoDB，包括配置，数据文件，不可回滚。备份好数据
:::

1. 停止服务
```sh
sudo service mongod stop
```

2. 移除安装的MongoDB包
```sh
sudo yum erase $(rpm -qa | grep mongodb-org)
```
```sh
sudo apt-get purge mongodb-org*
```

3. 移除数据文件夹
```sh
sudo rm -r /var/log/mongodb
sudo rm -r /var/lib/mongo
```

## MongoDB包下面的组件

### mongod

::: tip
`mongod`是MongoDB系统中主要的守护进程，处理数据请求，管理数据存取，执行后台一些管理操作。
:::
