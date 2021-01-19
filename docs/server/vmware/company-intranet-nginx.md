# 模拟公司内网开发环境

使用**172.16.203.140**这台机器

## 编译前准备

1. 下载Nginx

```bash
wget http://nginx.org/download/nginx-1.18.0.tar.gz
```

2. 解压安装包

```bash
tar -zxf nginx-1.18.0.tar.gz 
```

![jaybSn](https://image.hualihai.cn/blog/jaybSn.png)

3. 各个目录简单介绍


4. 使Nginx语法在VIM中高亮

```bash
cp -r contrib/vim/* ~/.vim/
```

![3Zpniw](https://image.hualihai.cn/blog/3Zpniw.png)

## 执行编译

1. 查看编译支持的参数

```bash
./configure --help | more
```

2. 执行编译

```bash
./configure --prefix=/usr/local/nginx --with-http_ssl_module
```

3. 提示缺少什么就按照什么

```bash
yum install -y gcc-c++
yum install -y pcre pcre-devel
yum install -y openssl openssl-devel
```

4. 编译完成之后

编译完之后会生成一些中间文件在`objs`目录下

![yzNucL](https://image.hualihai.cn/blog/yzNucL.png)

objs下的**ngx_modules.c**决定了哪些模块会被编译

5. 执行make

```bash
make
```

会在objs下生成一些中间文件

![gZKJyU](https://image.hualihai.cn/blog/gZKJyU.png)

6. 执行make install

```bash
make install
```

## 修改nginx.conf

```conf
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    include /usr/local/nginx/conf/sites-available/*.conf;

}
```

## 配置两台web服务器

1. goods.stage.com

```bash
vim /usr/local/nginx/conf/sites-available/goods.conf
```

```conf
server {
        listen       80;
        server_name  goods.stage.com;

        #charset koi8-r;

        #access_log  logs/goods.access.log  main;

        location / {
            #root   html;
            #index  index.html index.htm;
            proxy_read_timeout 30;
            proxy_pass http://goods.stage.com;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
}

upstream goods.stage.com {
    server 172.16.203.201:8080 weight=10;
}
```

2. cart.stage.com

```bash
vim /usr/local/nginx/conf/sites-available/cart.conf
```

```conf
server {
        listen       80;
        server_name  cart.stage.com;

        #charset koi8-r;

        #access_log  logs/goods.access.log  main;

        location / {
            #root   html;
            #index  index.html index.htm;
            proxy_read_timeout 30;
            proxy_pass http://cart.stage.com;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
}

upstream cart.stage.com {
    server 172.16.203.202:8080 weight=10;
}
```

## 生成HTTPS证书

TODO

https://www.jianshu.com/p/d17b9fd55080
https://www.jianshu.com/p/7cb5c2cffaaa
https://www.jianshu.com/p/ba7f3f346bb8

