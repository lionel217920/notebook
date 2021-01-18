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

## 配置两台web服务器





