# Polipo

## installation

```sh
sudo apt-get install polipo
```

创建配置文件
```sh
cd /etc/polipo
touch config
```

```json
allowedClients = 172.16.2.32, 127.0.0.1
allowedPorts = 7777

proxyName = "localhost"

socksParentProxy = "172.16.2.8:1080"
socksProxyType = socks5

```


查看启动状态
```sh
sudo service polipo status
```

polipo.service - LSB: Start or stop the polipo web cache
   Loaded: loaded (/etc/init.d/polipo; generated)
   Active: active (running) since Tue 2019-07-30 09:15:26 CST; 40s ago
     Docs: man:systemd-sysv-generator(8)
  Process: 21001 ExecStop=/etc/init.d/polipo stop (code=exited, status=0/SUCCESS)
  Process: 21007 ExecStart=/etc/init.d/polipo start (code=exited, status=0/SUCCESS)
    Tasks: 1 (limit: 4915)
   CGroup: /system.slice/polipo.service
           └─21013 /usr/bin/polipo -c /etc/polipo/config pidFile=/var/run/polipo/polipo.pid daemonise=true

Jul 30 09:15:26 Lionel-PC systemd[1]: Starting LSB: Start or stop the polipo web cache...
Jul 30 09:15:26 Lionel-PC polipo[21013]: Established listening socket on port `8123`.
Jul 30 09:15:26 Lionel-PC polipo[21007]: Starting polipo: polipo.
Jul 30 09:15:26 Lionel-PC systemd[1]: Started LSB: Start or stop the polipo web cache.



https://github.com/jech/polipo/blob/master/config.sample

https://github.com/shadowsocks/shadowsocks/wiki/Convert-Shadowsocks-into-an-HTTP-proxy

```sh
usr/share/polipo/www/doc/
```

see more at `/usr/share/doc/polipo/examples`

see more at `usr/share/polipo`

https://blog.51cto.com/nginxs/1918260