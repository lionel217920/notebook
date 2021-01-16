---
sidebar: auto
---
# Nexus搭建Maven私有仓库

## 私服介绍

::: tip 一句话概况
局域网内的仓库服务
:::
私服是一种特殊的远程仓库，架设在`局域网内`的仓库服务，私服`代理广域网`上的远程仓库，供局域网内的Maven用户使用。
当Maven需要下架构件的时候，先从私服请求，如果私服上不存在构件，则从外部的远程仓库下载，并缓存在私服上，再为Maven的下载请求提供服务。一些`无法从外部仓库下载的构件`也能从本地上传到私服，供其他人使用。

![结构图](http://image.hualihai.cn/blog/61386de0-2148-4675-be8a-59537e37a367)

## 为什么要使用私服

- 节省外网带宽
- 加速Maven构件
- 部署第三方构件，上传自己公司的jar包
- 有的公司不能访问外网

通过建立自己的私服，降低中央仓库负荷，节省外网带宽，加速maven构件，自己部署构件等，从而更高效的使用maven。

## 安装Nexus
[Nexus Repository OSS](https://help.sonatype.com/repomanager3)是一个免费的，世界上最受欢迎的构件存储库，是典型的`Java Web`应用，内嵌了`Jetty`容器。

[官网下载地址](https://www.sonatype.com/nexus-repository-oss)
解压安装包
```sh
tar -xzvf nexus-3.15.2-01-unix.tar.gz
```
::: warning
Detected execution as "root" user.  This is NOT recommended!
:::
解压出来有两个文件夹：`nexus-3.15.2-01` AND `sonatype-work`



nexus {start|stop|run|run-redirect|status|restart|force-reload}


## 登录Nexus

## Nexus的仓库与仓库组


## Nexus的搜索

## 配置Maven从Nexus下载构件

## 部署构件至Nexus

## Nexus权限管理
