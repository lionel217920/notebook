# 搭建CentOS开发环境



## 下载CentOS镜像

[官网地址点这里](https://www.centos.org/download/)

![屏幕快照2020-11-22下午4.12.13](https://image.hualihai.cn/blog/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202020-11-22%20%E4%B8%8B%E5%8D%884.12.13.png)

![屏幕快照2020-11-22下午4.20.22](https://image.hualihai.cn/blog/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202020-11-22%20%E4%B8%8B%E5%8D%884.20.22.png)

可以下载：

- centos7
  - Minimal - 最小化安装
  - DVD - 基本安装
  - Everything - 全部内容安装

- centos8
  - minial - 最小化安装
  - boot - 应该是最小最小的启动版本
  - dVD - 基本安装

我使用的是这三个版本:

1. `CentOS-7-x86_64-Minimal-2009` 
2. `CentOS-7-x86_64-DVD-2009` 
3. `CentOS-8.2.2004-x86_64-minimal`

## 最小化安装网络配置

使用**CentOS-7-x86_64-Minimal-2009**镜像安装为例子

1. 将普通用户赋予root权限

切换root用户

```bash
su root
```
编辑`sudoers`文件，使普通用户有`root`权限
```bash
vi /etc/sudoers
```

在**root    ALL=(ALL)       ALL**下面一行添加**lionel    ALL=(ALL)       ALL**

2. 配置网络

```bash
vi /etc/sysconfig/network-scripts/ifcfg-ens33
```

未修改网络配置之前的截图

![屏幕快照2020-11-22下午4.53.28](https://image.hualihai.cn/blog/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202020-11-22%20%E4%B8%8B%E5%8D%884.53.28.png)

修改后的文件内容

```yaml
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=static
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=ens33
UUID=05606ac9-81a6-4ee9-8f16-f575a076c3cd
DEVICE=ens33
ONBOOT=yes
IPADDR=172.16.203.130
GATEWAY=172.16.203.2
NETMASK=255.255.255.0
DNS1=8.8.8.8
```

3. 重新启动网卡

```bash
sudo service network restart
```

4. 修改主机名称

![kOEOkU](https://image.hualihai.cn/blog/kOEOkU.png)

```bash
sudo vim /etc/hostname
```

将原始主机名称**localhost.localdomain**替换成IP地址的最后一位**140**。方便我们在终端工具中区分主机地址。

![WsMCj4](https://image.hualihai.cn/blog/WsMCj4.png)

## 最小化安装常用软件

使用**CentOS-7-x86_64-Minimal-2009**镜像安装，一些工具都没有安装，需要我们自己安装

1. 安装网络工具

```bash
sudo yum install -y net-tools
```

2. 安装VIM

```bash
sudo yum install -y vim
```
TODO 其他后续补充~~ 

## 安装OpenJDK

查看是否已安装openjdk

```bash
yum list installed | grep jdk
```

查看可安装的openjdk

![J93xKc](https://image.hualihai.cn/blog/J93xKc.png)

安装openjdk8

```bash
sudo yum install -y java-1.8*
```

![AfklvB](https://image.hualihai.cn/blog/AfklvB.png)

4. 配置Java环境变量

先找到Java安装到了哪里

```bash
which java
```

```bash
ls -l /usr/bin/java
ls -l /etc/alternatives/java
```

![9pdzsp](https://image.hualihai.cn/blog/9pdzsp.png)

得到Java的安装目录是：**/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.272.b10-1.el7_9.x86_64**