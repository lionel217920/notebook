---
sidebar: auto
---

# Linux下包管理工具及软件安装

Linux系统下最常见的安装包格式`rpm`包和`deb`包，rpm包主要应用在**RedHat**系列，而deb包主要应用在**Debian**系列。  
> 包管理工具命令，RedHat系列使用`yum`，Debian系列使用`apt-get`。  
> 软件管理机制，RedHat系列使用`rpm`，Debian系列使用`dpkg`

## 软件管理
### rpm
RPM = **RedHat Package Management**，用户安装卸载`.rpm`软件。RPM通过将代码基于特定平台系统编译为可执行文件，来简化开源软件的安装管理。  

- 查看已安装的软件包
```sh
rpm -qa | grep vim
```
- 安装软件包
```sh
rpm -ivh yum-2.0.4-1.rh.fr.i386.rpm
```
- 移除软件包
```sh
rpm -e xxxxxx.rpm
```
- 查询依赖关系
```sh
rpm -qRp xxxx.rpm
```
### dpkg
衍生于Debian的其他Linux系统大多使用dpkg来管理软件。

- 安装软件包
```sh
dpkg -i xxxxxx.deb
```
- 查询已安装的软件
```sh
dpkg -l
```
- 查询依赖关系
```sh
dpkg -info xxxxx.deb
```
- 移除软件包
```sh
dpkg -P xxxx.deb
```

## 包管理工具

### yum
**Yellowdog Updateer Modified**  
在RH系列Linux系统中的Shell前端软件包管理器（rpm的前端程序）。基于RPM包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，一次安装所有依赖的软件包

- 安装
```sh
yum install –y package_name
```
- 卸载
```sh
yum remove package_name
```
- 更新
```sh
yum update package_name
```
- 查找软件包
```sh
yum search keyword
```
- 列出所有安装包
```sh
yum list package_name
```
- 列出已安装的软件包
```sh
yum list installed
```
::: tip
相比rpm更加人性化，不用考虑依赖关系
:::
yum源文件所在目录（仓库的配置文件）：`/etc/yum.repos.d/`

### apt-get
apt作用于deb包，apt可以配置多个资源库，apt会在这些库中搜索软件包。

- 安装
```sh
sudo apt-get install package_name  
```
- 卸载
```sh
sudo apt-get remove package_name
```  
- 更新
```sh
sudo apt-get update package_name  
```
- 重新安装
```sh
sudo apt-get install package_name --reinstall  
```
- 更新软件源
```sh
sudo apt-get update
```
- 更新已安装的包
```sh
sudo apt-get upgrade
```  

::: warning
ubuntu16.04加入了apt命令，推荐使用`apt`命令
:::


## EPEL
Epel - **Extra Package for Enterprise Linux**，免费开源发行软件包版本库，为红帽系列操作系统提供额外的软件包。

> Provides lots of open source packages to install via yum.

* 通过wget下载
```sh
wget http://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
rpm -ivh epel-release-latest-7.noarch.rpm
```
* 通过yum安装
```sh
yum install epel-release
```
* 校验Epel已安装
```sh
yum repolist
```
* 使用Epel安装软件
```sh
yum -y install nginx
```

## 软件安装方式

### 源码形式安装

绝大多数软件都是直接以源码形式发布，源码需要编译成为二进制形式之后才可以使用。源码包一般是经过tar打包然后压缩的文件，需要**先解压**。

源代码基本编译流程：
1. 检查编译环境：`.configure`
2. 对源码进行编译：`make`
3. 将生成的可执行文件安装到计算机：`make install`

::: danger
操作复杂，编译时间长，容易出现问题
:::

### 软件包管理器安装

1. 解决rpm的依赖关系，自动解决依赖关系。
2. 引入仓库概念，支持多个仓库

### 下载软件包

有些软件包不在仓库中，通过`软件包管理器`安装有问题，就需要手动安装。
可以通过`wget`下载安装包或者本地下载安装包后上传到服务器上。  

`wget`类似于迅雷，是一种下载工具。通过HTTP，HTTPS，FTP最常见的TCP/IP协议下载。使用wget下一个rpm包或者deb包，之后使用`rpm`或`dpkg`进行安装

::: danger
很多安装包有依赖性，需手动解决依赖，手动解决很复杂
:::
