# Linux下搭建DNS服务器

要在centos配置DNS服务器，要先安装DNS软件BIND

DNS缓存存放在哪里？如何清理？第一次访问网站会比较慢，应该是有DNS解析的过程

## 安装

```bash
yum -y install bind*
```

```bash
systemctl start named.service
```

```bash
netstat -an | grep :53
```

## 配置文件

drwxr-x---.  2 root named       6 Jun  1 11:26 named
-rw-r--r--.  1 root root      621 Jun  1 11:26 named-chroot.files
-rw-r-----.  1 root named    1806 Oct 21 10:57 named.conf
-rw-r-----.  1 root named    1806 Jun  1 11:26 named.conf.bak
-rw-r--r--.  1 root named    3923 Jun  1 11:26 named.iscdlv.key
-rw-r-----.  1 root named     931 Jun 21  2007 named.rfc1912.zones
-rw-r--r--.  1 root named    1886 Apr 13  2017 named.root.key


## 备份文件

## named.conf.bak

```conf
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

## named.rfc1912.zones

```conf
// named.rfc1912.zones:
//
// Provided by Red Hat caching-nameserver package
//
// ISC BIND named zone configuration for zones recommended by
// RFC 1912 section 4.1 : localhost TLDs and address zones
// and http://www.ietf.org/internet-drafts/draft-ietf-dnsop-default-local-zones-02.txt
// (c)2007 R W Franks
//
// See /usr/share/doc/bind*/sample/ for example named configuration files.
//

zone "localhost.localdomain" IN {
        type master;
        file "named.localhost";
        allow-update { none; };
};

zone "localhost" IN {
        type master;
        file "named.localhost";
        allow-update { none; };
};

zone "1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.ip6.arpa" IN {
        type master;
        file "named.loopback";
        allow-update { none; };
};

zone "1.0.0.127.in-addr.arpa" IN {
        type master;
        file "named.loopback";
        allow-update { none; };
};

zone "0.in-addr.arpa" IN {
        type master;
        file "named.empty";
        allow-update { none; };
};
```

## named.stage.com

```yaml
$TTL 1H
@       IN SOA  @ rname.invalid. (
                                        0       ; serial
                                        1D      ; refresh
                                        1H      ; retry
                                        1W      ; expire
                                        3H )    ; minimum
@             IN NS dns.stage.com.

dns.stage.com.  IN A 172.16.100.100
www.stage.com.  IN A 172.16.100.100
```

```yaml
$TTL  1H
@       IN SOA dns.stage.com. lionel.mail.stage.com.(2020112301 3H 15M 1W 1D)
@       IN NS   dns.stage.com.


dns.stage.com.    IN A      172.16.203.130
www.stage.com.    IN A    172.16.203.140
goods.stage.com.   IN A    172.16.203.140
cart.stage.com.   IN A   172.16.203.140
```

## named.172.16.100

```yaml
$TTL 1H
@       IN SOA  @ rname.invalid. (
                                        0       ; serial
                                        1D      ; refresh
                                        1H      ; retry
                                        1W      ; expire
                                        3H )    ; minimum
@             IN NS dns.stage.com.

100  IN PTR dns.stage.com.
100  IN PTR www.stage.com.
```

```yaml
$TTL  600
@       IN SOA  dns.stage.com. lionel.mail.stage.com.(2020112301 3H 15M 1W 1D)
@       IN NS   dns.stage.com.

130    IN PTR    dns.stage.com.
140    IN PTR    www.stage.com.
140    IN PTR    goods.stage.com.
```