# 模拟公司内网开发环境

## 搭建DNS服务器

使用**172.16.203.130**这台机器

### 安装bind软件

```bash
yum -y install bind*
```

![7W8aeb](https://image.hualihai.cn/blog/7W8aeb.png)

启动**bind**服务

```bash
systemctl start named.service
```

查看端口判断服务是否启动成功

```bash
netstat -an | grep :53
```

![68VpCa](https://image.hualihai.cn/blog/68VpCa.png)

### Bind的默认路径设定与**chroot**

chroot代表的是 **change to root(根目录)** 的意思，root代表的是根目录。CentOS默认将bind锁在`/var/named/chroot`目录中.

由于CentOS已经透过启动脚本帮我们进行档案与目录的挂载链接，所以请你直接修改`/etc/named.conf`即可，不要再去`/var/named/chroot/etc/named.conf`修改.

BIND的配置文件为`/etc/named.conf`

![za2Gmd](https://image.hualihai.cn/blog/za2Gmd.png)

### 编辑`/etc/named.conf`文件

原始文件内容

```yaml
//
// named.conf
//
// Provided by Red Hat bind package to configure the ISC BIND named(8) DNS
// server as a caching only nameserver (as a localhost DNS resolver only).
//
// See /usr/share/doc/bind*/sample/ for example named configuration files.
//
// See the BIND Administrator's Reference Manual (ARM) for details about the
// configuration located in /usr/share/doc/bind-{version}/Bv9ARM.html

options {
        listen-on port 53 { 127.0.0.1; };
        listen-on-v6 port 53 { ::1; };
        directory       "/var/named";
        dump-file       "/var/named/data/cache_dump.db";
        statistics-file "/var/named/data/named_stats.txt";
        memstatistics-file "/var/named/data/named_mem_stats.txt";
        recursing-file  "/var/named/data/named.recursing";
        secroots-file   "/var/named/data/named.secroots";
        allow-query     { localhost; };

        /* 
         - If you are building an AUTHORITATIVE DNS server, do NOT enable recursion.
         - If you are building a RECURSIVE (caching) DNS server, you need to enable 
           recursion. 
         - If your recursive DNS server has a public IP address, you MUST enable access 
           control to limit queries to your legitimate users. Failing to do so will
           cause your server to become part of large scale DNS amplification 
           attacks. Implementing BCP38 within your network would greatly
           reduce such attack surface 
        */
        recursion yes;

        dnssec-enable yes;
        dnssec-validation yes;

        /* Path to ISC DLV key */
        bindkeys-file "/etc/named.root.key";

        managed-keys-directory "/var/named/dynamic";

        pid-file "/run/named/named.pid";
        session-keyfile "/run/named/session.key";
};

logging {
        channel default_debug {
                file "data/named.run";
                severity dynamic;
        };
};

zone "." IN {
        type hint;
        file "named.ca";
};

include "/etc/named.rfc1912.zones";
include "/etc/named.root.key";

```

修改内容

```yaml
listen-on port 53 { any; };
allow-query     { any; };
```

### 数据库档案设定

- 编辑`named.rfc1912.zones`文件

添加内容

```conf
zone "stage.com" IN {
       type master;
       file "named.stage.com";
       allow-update { none; };
};

zone "203.16.172.in-addr.arpa" IN {
       type master;
       file "named.172.16.203";
       allow-update { none; };
};
```

- 创建 **named.stage.com** 文件

```bash
touch /var/named/named.stage.com
vim /var/named/named.centos.vbird
```

添加如下内容

```conf
$TTL  1H
@       IN SOA dns.stage.com. lionel.mail.stage.com.(2020112301 3H 15M 1W 1D)
@       IN NS   dns.stage.com.


dns.stage.com.    IN A      172.16.203.130
www.stage.com.    IN A    172.16.203.140
goods.stage.com.   IN A    172.16.203.140
cart.stage.com.   IN A   172.16.203.140
```

- 创建 **named.172.16.203** 文件

```bash
vim /var/named/named.172.16.203
```

添加如下内容

```conf
$TTL  600
@       IN SOA  dns.stage.com. lionel.mail.stage.com.(2020112301 3H 15M 1W 1D)
@       IN NS   dns.stage.com.

130    IN PTR    dns.stage.com.
140    IN PTR    www.stage.com.
140    IN PTR    goods.stage.com.
140    IN PTR    cart.stage.com.
```

### DNS 的启动观察与防火墙

- 启动DNS

```bash
systemctl start named.service
```

- 查看日志

```bash
tail -n 30 /var/log/messages | grep named
```

- 开放53端口

```bash
firewall-cmd --zone=public --add-port=53/tcp --permanent
firewall-cmd --reload
```