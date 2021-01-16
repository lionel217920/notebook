# Linux上安装openjdk

## Centos安装openjdk

[openjdk官网地址](https://openjdk.java.net/install/)

安装官网的命令会缺少javac命令

```sh
su -c "yum install java-1.8.0-openjdk"
```

必须要安装全部相关依赖
```sh
yum -y install java-1.8.0-openjdk*
```

安装完成后查找安装到了哪里，查看软连接的实际地址

```sh
which java
```


https://www.jianshu.com/p/aa74930b5beb


![NzcewL](https://s-daily.freshtxp.com/bdTools/2020-11-24/NzcewL.png)


![BTTsOn](https://s-daily.freshtxp.com/bdTools/2020-11-24/BTTsOn.png)