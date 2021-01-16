# Nginx Installation

[[toc]]

## Yum安装

创建`/etc/yum.repos.d/nginx.repo`

## Yum Epel安装

安装`epel-releas`

```bash
yum install nginx
```

## 源码安装

检查nginx所需要的安装环境,提示需要什么就安装什么

 ```bash
 ./configure
 ```

默认安装在了 **/usr/local/nginx** 路径

```bash
make && make install
```

## 配置环境变量

```bash
vim /etc/profile
```

```bash
export NGINX_HOME=/usr/local/nginx

export PATH=$NGINX_HOME/sbin:$PATH
```

```bash
source /etc/profile
```

### 常用命令

1. 测试配置文件
   ```nginx -t```
2. 重启
   ```nginx -s reopen```
3. 重新加载配置
   ```nginx -s reload```
4. 强制停止
   ```nginx -s stop```
5. 退出
   ```nginx -s quit```
6. 启动
   ```nginx```