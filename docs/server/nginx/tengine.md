# Tengine

* [官网地址](http://tengine.taobao.org/)
* [官网文档地址](http://tengine.taobao.org/documentation.html)
* [Github地址](https://github.com/alibaba/tengine)

It is based on the Nginx HTTP server and has many advanced features.

# 安装Tengine

> Centos8安装有问题，使用Centos7

1. **configure** 提示缺少什么就安装什么

```sh
./configure
```

```sh
sudo yum -y install gcc-c++
sudo yum install -y pcre pcre-devel
sudo yum install -y openssl openssl-devel
```

2. **make**

CFLAGS =  -pipe  -O -W -Wall -Wpointer-arith -Wno-unused -Werror -g

去掉-Werror

```yml
ngx_int_t
ngx_libc_crypt(ngx_pool_t *pool, u_char *key, u_char *salt, u_char **encrypted)
{
    char               *value;
    size_t              len;
    struct crypt_data   cd;

    cd.initialized = 0;
#ifdef __GLIBC__
    /* work around the glibc bug */
    cd.current_salt[0] = ~salt[0];
```

**centos8安装有问题**

https://blog.csdn.net/humanyr/article/details/107405383

https://blog.csdn.net/qq_39820671/article/details/104948599

https://www.cnblogs.com/qipan/p/12071356.html

https://www.jianshu.com/p/5336feadefd3


配置环境变量

```sh
vim /etc/profile
export NGINX_HOME=/usr/local/nginx
export PATH=$NGINX_HOME/sbin:$PATH
source /etc/profile
```

设置文件夹权限

设置防火墙

宿主机访问测试

