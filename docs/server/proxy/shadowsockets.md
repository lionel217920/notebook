# 使用Shadowsocks创建SOCKS5代理服务器

`shadowsockets`是一种轻量级的`SOCKS5`web代理工具，主要用于绕过某些网站和web协议上的网络审查和屏蔽。

## 安装Shadowsocks
首先要安装`pip`，通过pip来安装shadowsockets。pip是一个非常强大的包管理系统，用来安装和管理使用`Python`语言编写的软件。
1. 安装pip，pip并不在CentOS核心包里面，所以需要用到Epel包仓库。
```sh
sudo yum install -y epel-release
sudo yum install -y python-pip
```
2. 校验是否安装成功
```sh
pip --version
```
3. pip常用命令
```sh
pip install [package_name]
pip uninstall [package_name]
pip search [package_name]
```
4. 安装Shadowsocks
```sh
pip install shadowsocks
```

## 搭建服务端（Linux）
在etc目录下创建shadowsocks文件夹，并创建config.json文件.  
```json
{
    "server":"0.0.0.0",
    "local_address":"127.0.0.1",
    "local_port":1080,
    "port_password":{
         "8989":"123456",
         "9001":"123456"
    },
    "timeout":600,
    "method":"aes-256-cfb",
    "fast_open": false
}
```

启动/停止命令
```sh
ssserver -c /etc/shadowsocks.json -d start
ssserver -c /etc/shadowsocks.json -d stop
```

## 搭建客户端（Linux）
在etc目录下创建shadowsocks文件夹，并创建config.json文件.  
```json
{
    "server":"x.x.x.x",
    "server_port":8989,
    "local_address": "127.0.0.1",
    "local_port":1080,
    "password":"123456",
    "timeout":300,
    "method":"aes-256-cfb",
    "fast_open": false,
    "workers": 1,
    "prefer_ipv6": false
}
```

启动命令
```sh
sslocal -c /etc/shadowsocks/config.json
```

## 注意事项
在搭建客户端时，本地IP地址`local_address`不要写成`127.0.0.1`或者内网IP`172.16.2.32`，要将本地IP地址设置成`0.0.0.0`。

如果将`local_address`地址设置成`127.0.0.1`，那么在局域网内，其他机器不能通过sockets代理，需要把IP设置`0.0.0.0`

!> `127.0.0.1`和`0.0.0.0`的区别？
